import path from 'node:path';
import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import { installDependencies, runCommand } from '../services/dependencyService.js';
import { convertBase64ToText, fileExists, folderExists } from '../utils/fileUtils.js';
import {  getSourcePath } from '../utils/pathUtils.js';
import { sleep } from '../utils/cliUtils.js';

export async function implementComponent(component) {
	const { name, description, preconfig } = component;
	const sourcePath = getSourcePath(process.cwd());

	console.log(`
		${chalk.bold(name)}
		${chalk.dim(description)}
	`);
	await sleep(2000);

	// ! Dependencies

	const dependenciesSpinner = createSpinner(
		"Installing dependencies...",
	).start();
	const { dependencies, devDependencies } = preconfig;
	if (dependencies.length) {
		await installDependencies(dependencies, sourcePath);
	}
	if (devDependencies.length) {
		await installDependencies(devDependencies, sourcePath, true);
	}
	await sleep(2000);
	dependenciesSpinner.success({ text: "Dependencies installed successfully!" });

	// ! Scripts

	const scriptsSpinner = createSpinner("Executing scripts...").start();
	const { scripts } = preconfig;
	if (scripts.length) {
		for (const script of scripts) {
			await runCommand(script);
		}
	}
	await sleep(2000);
	scriptsSpinner.success({ text: "Scripts executed successfully!" });

	// ! Files

	const { files } = component;

	const filesSpinner = createSpinner("Creating files...\n").start();
	for (const file of files) {
		const { dir, filename, content } = file;


			if (!sourcePath) {
				filesSpinner.error({
					text: "Source path not found. Make sure you are in a valid project folder.",
				});
				return;
			}

			const dirPath = path.join(sourcePath,'src', dir);
			if (!(await folderExists(dirPath))) {
				fs.mkdir(dirPath, { recursive: true }, (error) => {
					if (error) {
						console.error("Error creating folder", error);
					}
				});
				console.log("Created folder: ", dir);
			}

			const filePath = path.join(dirPath, filename);
			if (!(await fileExists(filePath))) {
				// Coming file content is in base64
				const fileContent = await convertBase64ToText(content);
				fs.writeFile(filePath, fileContent, (error) => {
					if (error) {
						console.error("Error writing file", error);
					}
				});
				console.log("Created file: ", filename);
			} else {
				console.error(`File ${filename} already exists`);
			}

	}
	await sleep(2000);
	filesSpinner.success({ text: "Files created successfully!" });
}
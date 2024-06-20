import { exec } from 'node:child_process';

export async function runCommand(command, options = {}) {
	return new Promise((resolve, reject) => {
		const process = exec(command, options, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(stdout ? stdout : stderr);
    });

		process.stdout.on("data", (data) => {
			console.log(data.toString());
		});

		process.stderr.on("data", (data) => {
			console.error(data.toString());
		});
	});
}

export async function installDependencies(dependencies, path, dev = false) {
	const depType = dev ? "--save-dev" : "--save";
	const command = `npm install ${dependencies.join(" ")} ${depType}`;
	await runCommand(command, { cwd: path });
}



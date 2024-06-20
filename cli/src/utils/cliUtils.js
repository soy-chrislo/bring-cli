import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import { MESSAGES } from '../constants/messages.js';
import chalk from 'chalk';

export const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));

export async function chooseAsk(message, choices) {
	const questions = [
		{
			type: "list",
			name: "choose",
			message: message,
			choices: choices,
		},
	];

	const { choose } = await inquirer.prompt(questions);

	return choose;
}

export async function welcome() {
	const title = chalkAnimation.rainbow(
		MESSAGES.welcome
	);

	await sleep();
	title.stop();

	console.log(`
		${chalk.bold("CLI Repositories")}
		${chalk.dim("A simple CLI to manage your repositories templates and components.")}
		You just need to select the repository or component you want to create and the CLI will do the rest.
	`);
}

import { createSpinner } from "nanospinner";
import { chooseAsk } from '../utils/cliUtils.js';
import { cloneRepository } from '../services/gitService.js';
import { fetchRepositories, fetchComponents } from '../services/apiService.js';
import { sleep } from '../utils/cliUtils.js';
import { implementComponent } from "./implementComponent.js";

export async function handleChoose(choose) {
	if (choose === "Repository") {
		const spinnerRepos = createSpinner("Bringing your repositories...").start();
		await sleep(2000);
		try {
			const repositories = await fetchRepositories();

			spinnerRepos.success("Repositories loaded successfully!");

			const repository = await chooseAsk(
				"Choose a repository to create:",
				repositories.map((repo) => `${repo.id} - ${repo.name}`),
			);
			const repoId = repository.split(" - ")[0];
			const selectedRepo = repositories.find(
				(repo) => repo.id === Number(repoId),
			);
			const spinnerCloning = createSpinner("Cloning repository...").start();
			await cloneRepository(selectedRepo.url, selectedRepo.name);
			await sleep(1000);
			spinnerCloning.success({ text: "Repository cloned successfully!" });
		} catch (error) {
			spinnerRepos.error({ text: "Error loading repositories" });
		}
	} else if (choose === "Component") {
		const spinnerComponents = createSpinner(
			"Bringing your components...",
		).start();
		await sleep(2000);
		try {
			const components = await fetchComponents();

			spinnerComponents.success("Components loaded successfully!");
			const component = await chooseAsk(
				"Choose a component to create:",
				components.map((comp) => `${comp.id} - ${comp.name}`),
			);
			const compId = component.split(" - ")[0];
			const selectedComp = components.find(
				(comp) => comp.id === Number(compId),
			);
			const spinnerCloning = createSpinner(
				`Implementing ${selectedComp.name} component...`,
			).start();
			await implementComponent(selectedComp);
			await sleep(1000);
			spinnerCloning.success({ text: "Component implemented successfully!" });
		} catch (error) {
			console.log(error);
			spinnerComponents.error({ text: "Error loading components" });
		}
	}
}
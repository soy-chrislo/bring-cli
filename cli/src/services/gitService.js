import simpleGit from 'simple-git';
import path from 'node:path';
import env from '../env.js';

export async function cloneRepository(url, name) {
	const git = simpleGit();
	const targetPath = path.join(process.cwd(), name);

	try {
		const oauthUrl = url.replace(
			"https://github.com",
			`https://oauth2:${env.GITHUB_AUTH}@github.com`,
		);
		await git.clone(oauthUrl, targetPath);
	} catch (error) {
		console.error("Error cloning repository", error);
		throw error;
	}
}

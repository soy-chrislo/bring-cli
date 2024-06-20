import fs from 'node:fs';

export async function convertBase64ToText(base64) {
	return Buffer.from(base64, "base64").toString("utf-8");
}

export async function folderExists(folderPath) {
	try {
		const stats = fs.statSync(folderPath, (error) => {
			if (error) {
				console.error("Error checking folder", error);
			}
		});
		return stats.isDirectory();
	} catch (error) {
		if (error.code === "ENOENT") {
			return false;
		}
		throw error;
	}
}

export async function fileExists(filePath) {
	try {
		const stats = fs.statSync(filePath, (error) => {
			if (error) {
				console.error("Error checking file", error);
			}
		});
		return stats.isFile();
	} catch (error) {
		if (error.code === "ENOENT") {
			return false;
		}
		throw error;
	}
}
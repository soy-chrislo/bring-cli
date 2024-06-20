import fs from 'node:fs';
import path from 'node:path';

export function getSourcePath(dir) {
    let currentDir = path.resolve(dir);

    while (currentDir !== path.parse(currentDir).root) {
        if (fs.existsSync(path.join(currentDir, 'src'))) {
            return currentDir;
        }
        if (path.basename(currentDir) === 'src') {
            return path.dirname(currentDir);
        }
        currentDir = path.dirname(currentDir);
    }
    return null;
}
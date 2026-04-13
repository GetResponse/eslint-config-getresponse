import { existsSync } from 'fs';
import { dirname, join } from 'path';

export function lookupFile(basePath: string, ...files: string[]): string | null {
    for (const file of files) {
        const testedPath = join(basePath, file);

        if (existsSync(testedPath)) {
            return testedPath;
        }
    }

    const parent = dirname(basePath);
    return parent === basePath ? null : lookupFile(parent, ...files);
}

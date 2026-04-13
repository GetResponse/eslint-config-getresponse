import { readFileSync } from 'fs';
import { dirname } from 'path';
import { lookupFile } from './lookupFile';
import { once } from './once';

const cwd = process.cwd();

export const getPackageJson = once((): Record<string, unknown> | null => {
    const pjsonPath = lookupFile(cwd, 'package.json');
    return pjsonPath ? (JSON.parse(readFileSync(pjsonPath, 'utf-8')) as Record<string, unknown>) : null;
});

export const getGitIgnorePath = once((): string | null => {
    const found = lookupFile(cwd, '.gitignore');
    return found ? dirname(found) : null;
});

export const getPlaywrightConfig = once((): string | null => {
    const found = lookupFile(cwd, 'playwright.config.ts', 'playwright.config.js', 'playwright.config.mts', 'playwright.config.mjs');
    return found ? readFileSync(found, 'utf-8') : null;
});

import { readFileSync } from 'fs';
import semver from 'semver';
import { getTsconfig } from 'get-tsconfig';
import { getPackageJson, getCustomTsconfigPath } from './files';
import { lookupFile } from './lookupFile';
import { once } from './once';

export interface TsOptions {
    noImplicitAny: boolean;
    strictNullChecks?: boolean;
}

export interface TypeScriptConfig {
    version: string;
    config: TsOptions | null;
}

export interface DynamicConfig {
    react: string | null;
    typescript: TypeScriptConfig | null;
    jest: string | null;
    esm: boolean;
    playwright: string | null;
    shouldIncludeAll: boolean;
    tsconfigPath: string | null;
}

function getInstalledVersion(name: string, cwd: string = process.cwd()): string | null {
    const pkgPath = lookupFile(cwd, `node_modules/${name}/package.json`);
    if (!pkgPath) {
        return null;
    }
    try {
        const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8')) as Record<string, unknown>;
        return semver.coerce(pkg['version'] as string)?.version ?? null;
    } catch {
        return null;
    }
}

function getDep(packageJson: Record<string, unknown> | null, name: string): string | null {
    for (const type of ['dependencies', 'devDependencies', 'peerDependencies']) {
        const deps = packageJson?.[type] as Record<string, string> | undefined;
        const requestedVersion = deps?.[name];

        if (typeof requestedVersion === 'string') {
            return semver.coerce(requestedVersion)?.version ?? getInstalledVersion(name) ?? 'unknown';
        }
    }

    return null;
}

function getTsOptions(): TsOptions | null {
    const tsConfig = getTsconfig();

    if (!tsConfig) {
        return null;
    }

    const options = tsConfig.config.compilerOptions ?? {};

    return {
        noImplicitAny: options['noImplicitAny'] ?? options['strict'] ?? false,
        // TODO: Why was the `strictNullChecks` option never set before?
        // strictNullChecks: (options['strictNullChecks'] ?? options['strict'] ?? false),
    };
}

export const buildDynamicConfig = once((): DynamicConfig => {
    const packageJson = getPackageJson();
    const dep = (name: string) => getDep(packageJson, name);
    const tsVersion = dep('typescript');

    return {
        react: dep('react'),
        typescript: tsVersion ? { version: tsVersion, config: getTsOptions() } : null,
        jest: dep('jest'),
        esm: packageJson?.['type'] === 'module',
        playwright: dep('@playwright/test') ?? dep('playwright'),
        shouldIncludeAll: process.env['DOCS_MODE'] === '1',
        tsconfigPath: getCustomTsconfigPath(),
    };
});

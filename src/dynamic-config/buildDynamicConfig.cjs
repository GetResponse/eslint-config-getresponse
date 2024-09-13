const semver = require('semver');
const {PackageJson} = require('./files.cjs');
const {getTsconfig} = require('get-tsconfig');

let cachedConfig = null;

module.exports.buildDynamicConfig = () => {
    if (cachedConfig) {
        return cachedConfig;
    }

    function getDep(name) {
        for (const type of ['dependencies', 'devDependencies', 'peerDependencies']) {
            const requestedVersion = PackageJson?.[type]?.[name];

            if (!requestedVersion) {
                continue;
            }

            return semver.minVersion(semver.coerce(requestedVersion).toString()).toString();
        }

        return null;
    }

    function getTsOptions() {
        const tsConfig = getTsconfig();

        if (tsConfig === null) {
            return null;
        }

        const options = tsConfig.config.compilerOptions ?? {};

        return {
            noImplicitAny: options.noImplicitAny ?? options.strict ?? false,
        };
    }

    const tsVersion = getDep('typescript');

    return cachedConfig = {
        react: getDep('react'),
        typescript: tsVersion === null ? null : {
            version: tsVersion,
            config: getTsOptions(),
        },
        jest: getDep('jest'),
        esm: PackageJson.type === 'module',
        playwright: getDep('@playwright/test'),
        shouldIncludeAll: process.env.DOCS_MODE === '1',
    };
};

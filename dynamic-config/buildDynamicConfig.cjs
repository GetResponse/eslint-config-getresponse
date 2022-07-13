const semver = require('semver');
const {PackageJson} = require('./files.cjs');

let cachedConfig = null;

module.exports.buildDynamicConfig = () => {
    if (cachedConfig) {
        return cachedConfig;
    }

    function getDep(name) {
        for (const type of ['dependencies', 'devDependencies', 'peerDependencies']) {
            const requestedVersion = PackageJson[type]?.[name];

            if (!requestedVersion) {
                continue;
            }

            return semver.minVersion(semver.coerce(requestedVersion).toString()).toString();
        }

        return null;
    }

    return cachedConfig = {
        react: getDep('react'),
        typescript: getDep('typescript'),
        jest: getDep('jest'),
        esm: PackageJson.type === 'module',
        shouldIncludeAll: process.env.DOCS_MODE === '1',
    };
};

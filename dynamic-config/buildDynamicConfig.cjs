const semver = require('semver');
const {PackageJson} = require('./files.cjs');

module.exports.buildDynamicConfig = () => {
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

    return {
        react: getDep('react'),
        typescript: getDep('typescript'),
        jest: getDep('jest'),
        esm: PackageJson.type === 'module',
    };
};

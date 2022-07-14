const fs = require('fs');
const {lookupFile} = require('./services/lookupFile.cjs');
const path = require('path');

let pjsonContent = null;
let gitIgnorePath = undefined;

module.exports = {
    get PackageJson() {
        if (pjsonContent) {
            return pjsonContent
        }

        let pjsonPath = null;

        if (process.env.npm_package_json && fs.existsSync(process.env.npm_package_json)) {
            pjsonPath = process.env.npm_package_json;
        }
        else {
            pjsonPath = lookupFile('package.json');
        }

        if (pjsonPath === null) {
            return null;
        }

        return pjsonContent = JSON.parse(fs.readFileSync(pjsonPath).toString());
    },
    get GitIgnorePath() {
        if (gitIgnorePath !== undefined) {
            return gitIgnorePath;
        }

        let currentPath = process.cwd();

        do {
            const testedPath = path.join(currentPath, '.gitignore');

            if (fs.existsSync(testedPath)) {
                return gitIgnorePath = path.dirname(testedPath);
            }

            currentPath = path.resolve(currentPath, '..');
        }
        while (currentPath !== '/');

        return gitIgnorePath = null;
    },
};

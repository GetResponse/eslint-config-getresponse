const fs = require('fs');
const path = require('path');
const {lookupFile} = require('./services/lookupFile.cjs');

let pjsonContent = null;
let gitIgnorePath = undefined;

const cwd = process.cwd();

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
            pjsonPath = lookupFile(cwd, 'package.json');
        }

        if (pjsonPath === null) {
            return null;
        }

        return pjsonContent = JSON.parse(fs.readFileSync(pjsonPath).toString());
    },
    get GitIgnorePath() {
        return gitIgnorePath ??= path.dirname(lookupFile(cwd, '.gitignore'));
    },
};

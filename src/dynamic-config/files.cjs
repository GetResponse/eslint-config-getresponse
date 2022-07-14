const fs = require('fs');
const {lookupFile} = require('./services/lookupFile.cjs');

let pjsonContent = null;

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
};

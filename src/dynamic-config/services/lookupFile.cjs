const path = require('path');
const fs = require('fs');

const cwd = process.cwd();

module.exports.lookupFile = (...files) => {
    for (const file of files) {
        const filePath = path.join(cwd, file);

        if (fs.existsSync(filePath)) {
            return filePath;
        }
    }

    return null;
};

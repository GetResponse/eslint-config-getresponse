const path = require('path');
const fs = require('fs');

module.exports.lookupFile = (basePath, ...files) => {
    let currentPath = basePath;

    do {
        for (const file of files) {
            const testedPath = path.join(currentPath, file);

            if (fs.existsSync(testedPath)) {
                return testedPath;
            }
        }

        currentPath = path.resolve(currentPath, '..');
    }
    while (currentPath !== '/');

    return null;
};

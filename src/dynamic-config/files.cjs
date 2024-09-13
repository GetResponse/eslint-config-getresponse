const fs = require("fs");
const path = require("path");
const { lookupFile } = require("./services/lookupFile.cjs");

let pjsonContent = null;
let gitIgnorePath = undefined;
let playwrightConfigPath = null;

const cwd = process.cwd();

module.exports = {
  get PackageJson() {
    if (pjsonContent) {
      return pjsonContent;
    }

    let pjsonPath = null;

    if (
      process.env.npm_package_json &&
      fs.existsSync(process.env.npm_package_json)
    ) {
      pjsonPath = process.env.npm_package_json;
    } else {
      pjsonPath = lookupFile(cwd, "package.json");
    }

    if (pjsonPath === null) {
      return null;
    }

    return (pjsonContent = JSON.parse(fs.readFileSync(pjsonPath).toString()));
  },
  get GitIgnorePath() {
    const gitIgnoreLookup = lookupFile(cwd, ".gitignore");

    if (!gitIgnoreLookup) {
      return null;
    }

    return (gitIgnorePath ??= path.dirname(gitIgnoreLookup));
  },
  get PlaywrightConfig() {
    if (playwrightConfigPath !== null) return fs.readFileSync(playwrightConfigPath).toString();

    const playwrightLookup = lookupFile(cwd, "playwright.config.ts", "playwright.config.js", "playwright.config.mts", "playwright.config.mjs");
    if (!playwrightLookup) return null;
    playwrightConfigPath ??= playwrightLookup;
    return fs.readFileSync(playwrightConfigPath).toString();
  }
};

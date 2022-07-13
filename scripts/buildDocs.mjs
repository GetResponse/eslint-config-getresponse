import getRuleFinder from 'eslint-find-rules';
import pug from 'pug';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { fetchRules } from './docs/fetchRules.mjs';

const taskFetchRules = fetchRules();
const ruleFinder = await getRuleFinder('index.cjs');

const usedRules = ruleFinder.getCurrentRulesDetailed();
const unusedRules = ruleFinder.getUnusedRules();
const usedDeprecatedRules = ruleFinder.getDeprecatedRules()
    .filter(rule => rule in usedRules);

const rulesMetadata = await taskFetchRules;

const htmlContent = pug.renderFile(path.join(url.fileURLToPath(new URL('.', import.meta.url)), 'docs', 'docs-template.pug'), {
    deprecated: usedDeprecatedRules.map(
        rule => ({
            name: rule,
            description: rulesMetadata[rule]?.description,
            url: rulesMetadata[rule]?.url,
        }),
    ),
    enabled: Object.entries(usedRules).map(([rule, [status, config]]) => ({
        name: rule,
        status,
        config,
        description: rulesMetadata[rule]?.description,
        url: rulesMetadata[rule]?.url,
    })),
    unused: unusedRules.map(
        rule => ({
            name: rule,
            description: rulesMetadata[rule]?.description,
            url: rulesMetadata[rule]?.url,
        }),
    ),
});

const destDir = path.join(process.cwd(), 'public');
const destFile = path.join(destDir, 'index.html');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
}

fs.writeFileSync(destFile, htmlContent);

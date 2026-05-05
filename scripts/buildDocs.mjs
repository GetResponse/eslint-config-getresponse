import { mkdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { collectRules } from './docs/collectRules.mjs';
import { classifyRules } from './docs/classifyRules.mjs';
import { renderHtml } from './docs/renderHtml.mjs';

// Force the dynamic config to include every plugin (jest/react/playwright/etc.)
// regardless of what's installed in this repo. The flag is read by
// dist/dynamic-config/buildDynamicConfig.ts.
process.env.DOCS_MODE = '1';

const repoRoot = resolve(import.meta.dirname, '..');

const collected = await collectRules(repoRoot);
const classified = classifyRules(collected);
const html = renderHtml(classified);

const destDir = join(repoRoot, 'public');
mkdirSync(destDir, { recursive: true });
writeFileSync(join(destDir, 'index.html'), html);

const { enabled, deprecated, unused } = classified;
// eslint-disable-next-line no-console
console.log(`Generated public/index.html — ${enabled.length} enabled, ${deprecated.length} deprecated, ${unused.length} unused`);

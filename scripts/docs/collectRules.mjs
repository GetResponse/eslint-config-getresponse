import { ESLint } from 'eslint';
// `builtinRules` is the only runtime API to enumerate ESLint's core rule registry.
// It's marked @deprecated in TS types as a stability disclaimer ("we may move
// or remove this"), not "use X instead" — no formal replacement exists. The
// `Linter` class has no rule-listing method in flat-config era, the
// `eslint/rules` subpath is types-only, and `@eslint/core` is a types-only
// placeholder. This export has been stable since ESLint 8 and is what the rest
// of the ecosystem (eslint-find-rules, etc.) uses for the same purpose.
import { builtinRules } from 'eslint/use-at-your-own-risk';
import { join } from 'node:path';

// File paths whose merged config we want to inspect. Together they cover all
// scoped rule-sets in the package: TypeScript, React on TSX, and Playwright
// (which is gated by file patterns).
const probeFiles = ['src/probe.ts', 'src/probe.tsx', 'e2e/probe.spec.ts'];

export async function collectRules(repoRoot) {
    const eslint = new ESLint({
        cwd: repoRoot,
        overrideConfigFile: join(repoRoot, 'eslint.config.ts'),
    });

    const mergedRules = {};
    const pluginMap = {};

    const configs = await Promise.all(probeFiles.map((f) => eslint.calculateConfigForFile(f)));

    for (const cfg of configs) {
        Object.assign(mergedRules, cfg.rules ?? {});
        Object.assign(pluginMap, cfg.plugins ?? {});
    }

    const registry = new Map();

    for (const [name, rule] of builtinRules) {
        registry.set(name, { meta: rule.meta ?? {}, source: 'eslint' });
    }

    for (const [pluginName, plugin] of Object.entries(pluginMap)) {
        if (!plugin?.rules) {
            continue;
        }

        for (const [ruleName, rule] of Object.entries(plugin.rules)) {
            const fullName = `${pluginName}/${ruleName}`;
            const meta = (typeof rule === 'function' ? {} : rule.meta) ?? {};

            registry.set(fullName, { meta, source: pluginName });
        }
    }

    return { mergedRules, registry };
}

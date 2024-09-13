const { buildDynamicConfig } = require('../dynamic-config/buildDynamicConfig.cjs');
const { PlaywrightConfig } = require('../dynamic-config/files.cjs');

const config = buildDynamicConfig();

function getFromPattern(pattern, cfg) {
    if (cfg === null) { return null; }
    const match = cfg.match(pattern);

    if (!match || match.length < 2) { return null; }
    const value = match[1];

    if (value.startsWith('/')) {
        return null;
    }

    if (value.startsWith('\'') || value.startsWith('"')) {
        return value.slice(1, -1);
    }

    if (value.startsWith('[')) {
        return value
            .slice(1, -1)
            .split(',')
            .map(el => el.trim())
            .filter(el => !el.startsWith('/') && !el.endsWith('/'))
            .map(el => el.replace(/^['"]|['"]$/g, ''));
    }

    return null;
}

function getDir(cfg) {
    return cfg?.match(/testDir:\s*['"]([^'"]+)['"]/m)?.[1] ?? 'e2e';
}

function getMatchPattern(cfg) {
    return getFromPattern(/testMatch:\s*(\/.*\/[gimsuy]*|['"][^'"]+['"]|\[[^\]]+])/m, cfg) ?? '**/*.@(spec|test).?(c|m)[jt]s?(x)';
}

function getIgnorePattern(cfg) {
    return getFromPattern(/testIgnore:\s*(\/.*\/[gimsuy]*|['"][^'"]+['"]|\[[^\]]+])/m, cfg) ?? '**/test-assets/**';
}

function getIncludeFiles() {
    const dir = getDir(PlaywrightConfig);
    const files = getMatchPattern(PlaywrightConfig);

    return (Array.isArray(files) ? files : [files]).map(f => `${dir.endsWith('/') ? dir : `${dir}/`}${f}`);
}

function getExcludedFiles() {
    const files = getIgnorePattern(PlaywrightConfig);
    return Array.isArray(files) ? files : [files];
}

const playwrightConfig = {
    overrides: [
        {
            files: getIncludeFiles(),
            excludedFiles: getExcludedFiles(),
            plugins: [
                'playwright',
            ],
            rules: {
                'playwright/expect-expect': 'warn',
                'playwright/max-expects': 'off',
                'playwright/max-nested-describe': ['error', { max: 2 }],
                'playwright/missing-playwright-await': 'error',
                'playwright/no-commented-out-tests': 'off',
                'playwright/no-conditional-expect': 'warn',
                'playwright/no-conditional-in-test': 'off',
                'playwright/no-duplicate-hooks': 'warn',
                'playwright/no-element-handle': 'error',
                'playwright/no-eval': 'error',
                'playwright/no-focused-test': 'warn',
                'playwright/no-force-option': 'warn',
                'playwright/no-get-by-title': 'warn',
                'playwright/no-hooks': 'off',
                'playwright/no-nested-step': 'warn',
                'playwright/no-networkidle': 'warn',
                'playwright/no-nth-methods': 'off',
                'playwright/no-page-pause': 'error',
                'playwright/no-raw-locators': 'off',
                'playwright/no-restricted-matchers': 'off',
                'playwright/no-skipped-test': 'off',
                'playwright/no-standalone-expect': 'error',
                'playwright/no-unsafe-references': 'warn',
                'playwright/no-useless-await': 'error',
                'playwright/no-useless-not': 'warn',
                'playwright/no-wait-for-selector': 'warn',
                'playwright/no-wait-for-timeout': 'error',
                'playwright/prefer-comparison-matcher': 'off',
                'playwright/prefer-equality-matcher': 'off',
                'playwright/prefer-hooks-in-order': 'off',
                'playwright/prefer-hooks-on-top': 'warn',
                'playwright/prefer-lowercase-title': 'off',
                'playwright/prefer-strict-equal': 'warn',
                'playwright/prefer-to-be': 'off',
                'playwright/prefer-to-contain': 'warn',
                'playwright/prefer-to-have-count': 'warn',
                'playwright/prefer-to-have-length': 'warn',
                'playwright/prefer-web-first-assertions': 'error',
                'playwright/require-hook': 'off',
                'playwright/require-to-throw-message': 'off',
                'playwright/require-top-level-describe': 'off',
                'playwright/valid-describe-callback': 'error',
                'playwright/valid-expect-in-promise': 'error',
                'playwright/valid-expect': 'warn',
                'playwright/valid-title': 'off',
            },
        },
    ],
};

if (config.shouldIncludeAll) {
    playwrightConfig.plugins = playwrightConfig.overrides[0].plugins;
    playwrightConfig.rules = playwrightConfig.overrides[0].rules;
}

module.exports = playwrightConfig;

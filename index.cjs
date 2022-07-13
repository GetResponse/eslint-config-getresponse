require('@rushstack/eslint-patch/modern-module-resolution');
const {buildDynamicConfig} = require('./dynamic-config/buildDynamicConfig.cjs');

const dynamicConfig = buildDynamicConfig();

module.exports = {
    extends: [
        './rules/best-practices',
        './rules/errors',
        './rules/es6',
        './rules/node',
        './rules/style',
        './rules/variables',
        dynamicConfig.jest ? './rules/jest' : null,
        dynamicConfig.typescript ? './rules/typescript' : null,
        dynamicConfig.react ? './rules/react' : null,
    ]
        .filter(Boolean)
        .map(f => require.resolve(f)),
    env: {
        browser: true,
        commonjs: !dynamicConfig.esm,
        es6: true,
        jest: !!dynamicConfig.jest,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: dynamicConfig.react ?? 'detect',
        },
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
                lib: ['ESNext', 'DOM', 'DOM.Iterable', 'ES6', 'ES7', 'WebWorker', 'ScriptHost'],
                warnOnUnsupportedTypeScriptVersion: false,
                project: ['./**/tsconfig.eslint.json', './**/tsconfig.json'],
                createDefaultProgram: true,
            },
        },
        {
            files: [
                '*.test.ts',
                '*.test.tsx',
                '**/__mocks__/**/*.ts',
                '**/__mocks__/**/*.tsx',
                '*.spec.ts',
                '*.spec.tsx',
                '*.test-e2e.ts',
                '*.test-e2e.tsx',
                '*.spec-e2e.ts',
                '*.spec-e2e.tsx',
            ],
            rules: {
                'react/jsx-no-bind': 'off',
            },
        },
    ],
    globals: {
        JSX: 'readonly',
        globalThis: 'writable',
    },
};

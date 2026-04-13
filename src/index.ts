import '@rushstack/eslint-patch/modern-module-resolution';
import { readGitignoreFiles } from 'eslint-gitignore';
import { buildDynamicConfig } from './dynamic-config/buildDynamicConfig';
import { getGitIgnorePath } from './dynamic-config/files';

const dynamicConfig = buildDynamicConfig();
const gitIgnorePath = getGitIgnorePath();

export = {
    extends: [
        './rules/best-practices',
        './rules/errors',
        './rules/es6',
        './rules/node',
        './rules/style',
        './rules/variables',
        dynamicConfig.jest || dynamicConfig.shouldIncludeAll ? './rules/jest' : null,
        dynamicConfig.typescript || dynamicConfig.shouldIncludeAll ? './rules/typescript' : null,
        dynamicConfig.react || dynamicConfig.shouldIncludeAll ? './rules/react' : null,
        dynamicConfig.playwright || dynamicConfig.shouldIncludeAll ? './rules/playwright' : null,
    ]
        .filter(Boolean)
        .map((f) => require.resolve(f as string)),
    env: {
        browser: true,
        commonjs: !dynamicConfig.esm,
        es6: true,
        jest: typeof dynamicConfig.jest === 'string',
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    ignorePatterns: gitIgnorePath ? readGitignoreFiles({ cwd: gitIgnorePath }) : undefined,
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
                ecmaVersion: 2022,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
                lib: ['ESNext', 'DOM', 'DOM.Iterable', 'es2022', 'WebWorker', 'ScriptHost'],
                warnOnUnsupportedTypeScriptVersion: false,
                project: [
                    './**/tsconfig.eslint.json',
                    './**/tsconfig.json',
                    '**/tsconfig.eslint.json',
                    '**/tsconfig.json',
                ],
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

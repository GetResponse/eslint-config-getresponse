module.exports = {
    extends: [
        'eslint-config-getresponse-base',
        './rules/react',
        './rules/react-a11y',
        './rules/jest',
    ].map(require.resolve),
    plugins: [
        'jest',
        'jsx-a11y',
        'react',
        'react-hooks',
    ],
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    overrides: [
        {
            files: ['**/*.ts?(x)'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2018,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    ],
};

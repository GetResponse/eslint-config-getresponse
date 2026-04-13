import { buildDynamicConfig } from '../dynamic-config/buildDynamicConfig';

const config = buildDynamicConfig();

interface TypescriptEslintConfig {
    plugins?: string[];
    rules?: Record<string, unknown>;
    overrides: Array<{
        files: string[];
        plugins: string[];
        rules: Record<string, unknown>;
    }>;
}

const eslintConfig: TypescriptEslintConfig = {
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            plugins: ['@typescript-eslint', '@stylistic'],
            rules: {
                '@stylistic/member-delimiter-style': 'warn',
                '@stylistic/type-annotation-spacing': 'warn',
                'comma-spacing': 'off',
                '@stylistic/comma-spacing': 'warn',
                'func-call-spacing': 'off',
                '@stylistic/function-call-spacing': 'warn',
                indent: 'off',
                '@stylistic/indent': ['warn', 4, { SwitchCase: 1 }],
                'no-extra-semi': 'off',
                '@stylistic/no-extra-semi': 'warn',
                quotes: 'off',
                '@stylistic/quotes': ['warn', 'single', { avoidEscape: true }],
                semi: 'off',
                '@stylistic/semi': ['warn', 'always'],
                'space-before-function-paren': 'off',
                '@stylistic/space-before-function-paren': ['warn', { anonymous: 'always', named: 'never' }],
                camelcase: 'off',
                'default-param-last': 'off',
                '@typescript-eslint/default-param-last': 'error',
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/explicit-member-accessibility': 'off',
                '@typescript-eslint/member-ordering': 'off',
                // TBD
                '@typescript-eslint/naming-convention': 'off',
                'no-array-constructor': 'off',
                '@typescript-eslint/no-array-constructor': 'error',
                'no-dupe-class-members': 'off',
                '@typescript-eslint/no-dupe-class-members': 'error',
                '@typescript-eslint/no-dynamic-delete': 'off',
                'no-empty-function': 'off',
                '@typescript-eslint/no-empty-function': 'warn',
                '@typescript-eslint/no-explicit-any': [
                    'warn',
                    {
                        ignoreRestArgs: true,
                    },
                ],
                '@typescript-eslint/no-extra-non-null-assertion': 'warn',
                '@typescript-eslint/no-extraneous-class': 'off',
                '@typescript-eslint/no-magic-numbers': 'off',
                '@typescript-eslint/no-misused-new': 'error',
                '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
                '@typescript-eslint/no-non-null-assertion': 'off',
                '@typescript-eslint/no-require-imports': 'warn',
                '@typescript-eslint/no-this-alias': 'warn',
                'no-unused-expressions': 'off',
                '@typescript-eslint/no-unused-expressions': [
                    'warn',
                    {
                        allowTernary: true,
                    },
                ],
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': [
                    'warn',
                    {
                        ignoreRestSiblings: true,
                    },
                ],
                '@typescript-eslint/no-use-before-define': [
                    'warn',
                    {
                        functions: false,
                        classes: false,
                        enums: true,
                        variables: true,
                        typedefs: false,
                    },
                ],
                'no-useless-constructor': 'off',
                '@typescript-eslint/no-useless-constructor': 'warn',
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/prefer-function-type': 'off',
                '@typescript-eslint/require-array-sort-compare': 'off',
                '@typescript-eslint/strict-boolean-expressions': config.typescript?.config?.strictNullChecks ? 'warn' : 'off',
                '@typescript-eslint/switch-exhaustiveness-check': 'off',
                'no-redeclare': 'off',
                '@typescript-eslint/no-redeclare': 'error',
                'no-shadow': 'off',
                '@typescript-eslint/no-shadow': ['warn', {
                    ignoreOnInitialization: true,
                }],
                '@typescript-eslint/array-type': [
                    'warn',
                    {
                        default: 'array-simple',
                    },
                ],
                '@typescript-eslint/adjacent-overload-signatures': 'warn',
                '@typescript-eslint/await-thenable': 'off',
                '@typescript-eslint/ban-ts-comment': 'warn',
                '@typescript-eslint/consistent-type-assertions': ['warn', {
                    assertionStyle: 'as',
                }],
                // TBD
                '@typescript-eslint/consistent-type-definitions': 'off',
                '@typescript-eslint/no-floating-promises': 'off',
                '@typescript-eslint/no-for-in-array': 'error',
                '@typescript-eslint/no-implied-eval': 'error',
                '@typescript-eslint/no-inferrable-types': [
                    'warn', {
                        ignoreParameters: true,
                        ignoreProperties: true,
                    },
                ],
                '@typescript-eslint/no-misused-promises': ['error', {
                    checksVoidReturn: false,
                }],
                '@typescript-eslint/no-namespace': 'off',
                'no-throw-literal': 'off',
                '@typescript-eslint/only-throw-error': 'warn',
                '@typescript-eslint/no-type-alias': 'off',
                '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
                '@typescript-eslint/no-unnecessary-condition': 'off',
                '@typescript-eslint/no-unnecessary-qualifier': 'warn',
                '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
                // https://github.com/typescript-eslint/typescript-eslint/issues/2248
                '@typescript-eslint/no-unnecessary-type-assertion': 'off',
                '@typescript-eslint/prefer-as-const': 'warn',
                '@typescript-eslint/prefer-for-of': 'warn',
                '@typescript-eslint/prefer-includes': 'warn',
                '@typescript-eslint/prefer-namespace-keyword': 'error',
                // TBD
                '@typescript-eslint/prefer-nullish-coalescing': 'off',
                '@typescript-eslint/prefer-optional-chain': 'warn',
                // TBD
                '@typescript-eslint/prefer-readonly': 'off',
                '@typescript-eslint/prefer-regexp-exec': 'off',
                '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
                '@typescript-eslint/promise-function-async': 'off',
                '@typescript-eslint/require-await': 'error',
                '@typescript-eslint/restrict-plus-operands': 'off',
                '@typescript-eslint/restrict-template-expressions': 'off',
                'no-return-await': 'off',
                // disabled due to false positive
                '@typescript-eslint/return-await': 'off',
                '@typescript-eslint/triple-slash-reference': 'error',
                '@typescript-eslint/typedef': config.typescript?.config?.noImplicitAny ? 'off' : ['warn', {
                    arrayDestructuring: false,
                    arrowParameter: false,
                    memberVariableDeclaration: false,
                    objectDestructuring: false,
                    parameter: true,
                    propertyDeclaration: true,
                    variableDeclaration: false,
                }],
                '@typescript-eslint/unbound-method': 'off',
                '@typescript-eslint/unified-signatures': 'off',
                '@typescript-eslint/prefer-ts-expect-error': 'warn',
                'no-undef': 'off',
                '@typescript-eslint/no-duplicate-type-constituents': 'warn',
                '@typescript-eslint/consistent-type-imports': ['warn', {
                    prefer: 'type-imports',
                    fixStyle: 'inline-type-imports',
                    disallowTypeAnnotations: false,
                }],
            },
        },
    ],
};

if (config.shouldIncludeAll) {
    eslintConfig.plugins = eslintConfig.overrides[0].plugins;
    eslintConfig.rules = eslintConfig.overrides[0].rules;
}

export = eslintConfig;

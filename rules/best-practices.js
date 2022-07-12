module.exports = {
    rules: {
        'accessor-pairs': 'error',
        'array-callback-return': 'error',
        'block-scoped-var': 'off',
        'class-methods-use-this': 'off',
        complexity: 'off',
        'consistent-return': 'off',
        curly: 'warn',
        'default-case': 'off',
        'default-case-last': 'off',
        'default-param-last': 'error',
        'dot-location': ['warn', 'property'],
        'dot-notation': 'off',
        eqeqeq: 'warn',
        'guard-for-in': 'warn',
        'max-classes-per-file': 'off',
        'max-lines-per-function': 'off',
        'no-alert': 'error',
        'no-async-promise-executor': 'off',
        'no-caller': 'error',
        'no-case-declarations': 'off',
        'no-constructor-return': 'warn',
        'no-div-regex': 'off',
        'no-else-return': 'off',
        'no-empty-function': 'off',
        'no-empty-pattern': 'error',
        'no-eq-null': 'off',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'warn',
        'no-extra-label': 'off',
        'no-fallthrough': 'off',
        'no-floating-decimal': 'warn',
        'no-global-assign': 'error',
        'no-implicit-coercion': 'off',
        'no-implicit-globals': 'off',
        'no-implied-eval': 'error',
        // no-invalid-this should be enabled when configurable for class properties
        // https://github.com/typescript-eslint/typescript-eslint/issues/491
        'no-invalid-this': 'off',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': 'off',
        'no-multi-spaces': 'warn',
        'no-multi-str': 'off',
        'no-new': 'off',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-nonoctal-decimal-escape': 'warn',
        'no-octal': 'off',
        'no-octal-escape': 'off',
        'no-param-reassign': 'warn',
        'no-proto': 'error',
        'no-redeclare': 'warn',
        'no-restricted-properties': 'off',
        'no-return-assign': 'off',
        'no-return-await': 'off',
        'no-script-url': 'error',
        'no-self-assign': 'warn',
        'no-self-compare': 'error',
        'no-sequences': 'off',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'off',
        'no-unreachable-loop': 'error',
        'no-unused-expressions': 'off',
        'no-unused-labels': 'off',
        'no-useless-call': 'warn',
        'no-useless-catch': 'warn',
        'no-useless-concat': 'warn',
        'no-useless-escape': 'warn',
        'no-useless-return': 'warn',
        'no-void': ['error', {
            allowAsStatement: true,
        }],
        'no-warning-comments': 'off',
        'no-with': 'error',
        'prefer-object-spread': 'off',
        'prefer-named-capture-group': 'off',
        'prefer-promise-reject-errors': 'off',
        'prefer-regex-literals': 'warn',
        radix: 'off',
        'require-await': 'off',
        'vars-on-top': 'warn',
        'wrap-iife': 'warn',
        yoda: 'warn',
    },
};

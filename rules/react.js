module.exports = {
    plugins: [
        'react',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'react/boolean-prop-naming': ['off'],
        'react/button-has-type': ['warn'],
        'react/default-props-match-prop-types': ['warn'],
        'react/destructuring-assignment': ['off'],
        'react/display-name': ['off'],
        'react/forbid-component-props': ['off'],
        'react/forbid-dom-props': ['off'],
        'react/forbid-elements': ['off'],
        'react/forbid-foreign-prop-types': ['warn'],
        'react/forbid-prop-types': ['off'],
        'react/no-access-state-in-setstate': ['error'],
        'react/no-array-index-key': ['off'],
        'react/no-children-prop': ['error'],
        'react/no-danger': ['error'],
        'react/no-danger-with-children': ['off'],
        'react/no-deprecated': ['warn'],
        'react/no-did-mount-set-state': ['error'],
        'react/no-did-update-set-state': ['error'],
        'react/no-direct-mutation-state': ['warn'],
        'react/no-find-dom-node': ['warn'],
        'react/no-is-mounted': ['warn'],
        'react/no-multi-comp': ['warn'],
        'react/no-redundant-should-component-update': ['warn'],
        'react/no-render-return-value': ['error'],
        'react/no-set-state': ['off'],
        'react/no-string-refs': ['warn'],
        'react/no-this-in-sfc': ['error'],
        'react/no-typos': ['error'],
        'react/no-unescaped-entities': ['error'],
        'react/no-unknown-property': ['error'],
        'react/no-unsafe': ['warn'],
        'react/no-unused-prop-types': ['warn'],
        'react/no-unused-state': ['warn'],
        'react/no-will-update-set-state': ['error'],
        'react/prefer-es6-class': ['warn'],
        'react/prefer-stateless-function': ['off'],
        'react/prop-types': ['warn', {ignore: ['children', 'params']}],
        'react/react-in-jsx-scope': ['error'],
        'react/require-default-props': ['off'],
        'react/require-optimization': ['off'],
        'react/require-render-return': ['error'],
        'react/self-closing-comp': ['warn'],
        'react/sort-comp': ['warn'],
        'react/sort-prop-types': ['off'],
        'react/style-prop-object': ['off'],
        'react/void-dom-elements-no-children': ['warn'],
        'react/jsx-boolean-value': ['error', 'always'],
        'react/jsx-child-element-spacing': ['off'],
        'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
        'react/jsx-closing-tag-location': ['warn'],
        'react/jsx-curly-brace-presence': ['warn', {
            props: 'never',
            children: 'never',
        }],
        'react/jsx-curly-spacing': ['warn', 'never'],
        'react/jsx-equals-spacing': ['warn', 'never'],
        'react/jsx-filename-extension': ['off'],
        'react/jsx-first-prop-new-line': ['off'],
        'react/jsx-fragments': ['warn', 'syntax'],
        'react/jsx-handler-names': ['off'],
        'react/jsx-indent': ['warn', 4],
        'react/jsx-indent-props': ['off'],
        'react/jsx-key': ['error'],
        'react/jsx-max-depth': ['warn', {max: 7}],
        'react/jsx-one-expression-per-line': ['off'],
        'react/jsx-max-props-per-line': ['warn', {maximum: 1, when: 'multiline'}],
        'react/jsx-no-bind': ['warn', {ignoreRefs: true}],
        'react/jsx-no-comment-textnodes': ['error'],
        'react/jsx-no-duplicate-props': ['error'],
        'react/jsx-no-literals': ['off'],
        'react/jsx-no-target-blank': ['off'],
        'react/jsx-no-undef': ['error'],
        'react/jsx-pascal-case': ['warn'],
        'react/jsx-props-no-multi-spaces': ['warn'],
        'react/jsx-sort-default-props': ['off'],
        'react/jsx-sort-props': ['off'],
        'react/jsx-tag-spacing': ['warn', {
            closingSlash: 'never',
            beforeSelfClosing: 'never',
            afterOpening: 'never',
        }],
        'react/jsx-uses-react': ['error'],
        'react/jsx-uses-vars': ['error'],
        'react/jsx-wrap-multilines': ['warn'],
    },
};

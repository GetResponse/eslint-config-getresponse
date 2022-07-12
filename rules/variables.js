module.exports = {
    rules: {
        'init-declarations': ['off'],
        'no-delete-var': ['off'],
        'no-label-var': ['off'],
        'no-restricted-globals': ['off'],
        'no-shadow': ['error'],
        'no-shadow-restricted-names': ['off'],
        'no-undef': ['warn'],
        'no-undef-init': ['off'],
        'no-undefined': ['off'],
        'no-unused-vars': ['warn', { ignoreRestSiblings: true }],
        'no-use-before-define': ['off'],
    },
};

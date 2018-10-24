module.exports = {
    extends: [
        'eslint-config-getresponse-base',
        './rules/react',
        './rules/react-a11y',
    ].map(require.resolve),
};

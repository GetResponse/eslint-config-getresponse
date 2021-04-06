module.exports = {
  extends: ['eslint-config-getresponse-base', './rules/react', './rules/react-a11y'].map(require.resolve),
  plugins: ['jsx-a11y', 'react', 'react-hooks'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
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
      version: 'detect',
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
        'react/jsx-no-bind': ['off'],
      },
    },
  ],
  globals: {
    JSX: 'readonly',
  },
};

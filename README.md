# @getresponse/eslint-config

[![npm version](https://badge.fury.io/js/@getresponse%2Feslint-config.svg)](https://badge.fury.io/js/@getresponse%2Feslint-config)
[![Build Status](https://github.com/GetResponse/eslint-config-getresponse/actions/workflows/main.yml/badge.svg)](https://github.com/GetResponse/eslint-config-getresponse/actions)
![Dependencies](https://img.shields.io/librariesio/github/GetResponse/eslint-config-getresponse.svg)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://badges.mit-license.org)

---

An opinionated ESLint ruleset targeting TypeScript + React web apps

## Requirements

- ESLint `^8.48.0`

## Installation

1. Install `eslint` and `@getresponse/eslint-config`:

   ```bash
   npm i -D eslint @getresponse/eslint-config
   ```

2. Add `"extends": "@getresponse/eslint-config"` to your ESLint [configuration file](https://eslint.org/docs/latest/user-guide/configuring/configuration-files)

## TypeScript project files

Since `@typescript-eslint` v8, all linted `.ts`/`.tsx` files must be included in your `tsconfig.json`. Files outside the project will cause an error when type-aware rules are active. Make sure your `tsconfig.json` (or a dedicated `tsconfig.eslint.json`) covers all files you want to lint:

```json
{
  "include": ["src/**/*", "tests/**/*"]
}
```

## Dynamic rules

Rules for the following tools are enabled automatically when the corresponding package is detected in your `package.json`:

- `typescript`
- `react`
- `jest`
- `@playwright/test` / `playwright`

## Mixins

Additional opt-in rulesets are available:

```js
// .eslintrc.js
module.exports = {
    extends: [
        '@getresponse/eslint-config',
        '@getresponse/eslint-config/mixins/a11y',
    ],
};
```

| Mixin | Description |
|---|---|
| `@getresponse/eslint-config/mixins/a11y` | Accessibility rules via `eslint-plugin-jsx-a11y` |

## Rules list

The web version of the rules list is available on [GitHub Pages](https://getresponse.github.io/eslint-config-getresponse/)

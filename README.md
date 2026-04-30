# @getresponse/eslint-config

[![npm version](https://badge.fury.io/js/@getresponse%2Feslint-config.svg)](https://badge.fury.io/js/@getresponse%2Feslint-config)
[![Build Status](https://github.com/GetResponse/eslint-config-getresponse/actions/workflows/main.yml/badge.svg)](https://github.com/GetResponse/eslint-config-getresponse/actions)
![Dependencies](https://img.shields.io/librariesio/github/GetResponse/eslint-config-getresponse.svg)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://badges.mit-license.org)

---

An opinionated ESLint ruleset targeting TypeScript + React web apps.

## Requirements

- ESLint `^9.0.0`
- Node `>=18.18`

## Installation

```bash
npm i -D eslint @getresponse/eslint-config
```

## Usage

Create `eslint.config.js` in your project root:

```js
import config from '@getresponse/eslint-config';

export default config;
```

With local overrides:

```js
import { defineConfig } from 'eslint/config';
import config from '@getresponse/eslint-config';

export default defineConfig(
    config,
    {
        files: ['src/legacy/**/*.ts'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
);
```

## TypeScript project files

Rules requiring type information use `projectService` (auto-discovery). The package automatically:

- finds the nearest `tsconfig.json` for each linted file,
- uses `tsconfig.eslint.json` (if present in the project root) as fallback for files outside any project — typical for config files, scripts, and tests.

If you have files outside `src/` you want linted, point them at a dedicated `tsconfig.eslint.json`:

```json
{
    "extends": "./tsconfig.json",
    "include": ["src/**/*", "tests/**/*", "scripts/**/*"]
}
```

## Dynamic rules

Plugin rulesets are enabled automatically when the corresponding package is detected in your `package.json`:

- `typescript`
- `react` (+ `react-hooks`)
- `jest`
- `@playwright/test` / `playwright`

## Mixins

Additional opt-in rulesets:

```js
import { defineConfig } from 'eslint/config';
import config from '@getresponse/eslint-config';
import a11y from '@getresponse/eslint-config/mixins/a11y';

export default defineConfig(config, a11y);
```

| Mixin                                    | Description |
|------------------------------------------|---|
| `@getresponse/eslint-config/mixins/a11y` | Accessibility rules via `eslint-plugin-jsx-a11y` |

## Rules list

The web version of the rules list is available on [GitHub Pages](https://getresponse.github.io/eslint-config-getresponse/)

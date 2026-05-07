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

Rules requiring type information use `parserOptions.project`. The package picks the tsconfig in this order:

1. `tsconfig.eslint.json` in the project root (preferred), or
2. `tsconfig.json` (fallback).

The picked tsconfig's `include`/`exclude`/`files` are honored as-is — every file matched by ESLint must also be covered by the tsconfig's `include` (and not by `exclude`), otherwise typescript-eslint will throw a parsing error.

If you have files outside `src/` you want linted (config files, scripts, tests excluded from the build tsconfig, etc.), create a dedicated `tsconfig.eslint.json`:

```json
{
    "extends": "./tsconfig.json",
    "include": [
        "src/**/*",
        "tests/**/*",
        "scripts/**/*",
        "*.config.ts",
        "*.config.js"
    ],
    "exclude": []
}
```

Notes:
- If your build `tsconfig.json` excludes test files (`"exclude": ["**/*.test.ts"]`), override it with `"exclude": []` in `tsconfig.eslint.json` so tests are linted.
- All matched files share a single TypeScript Program — efficient for small/medium projects. For large monorepos with project references, consider switching to `projectService` via a local override (see typescript-eslint docs).
- You can override the picked tsconfig path globally via the `ESLINT_CUSTOM_TSCONFIG_PATH` env var.

## Dynamic rules

Plugin rulesets are enabled automatically when the corresponding package is detected in your `package.json`:

- `typescript`
- `react` (+ `react-hooks`)
- `vue`
- `jest`
- `@playwright/test` / `playwright`

## Presets

Every ruleset that ships with the package is also exposed via `config.presets`, so you can compose them explicitly (e.g. apply Vue rules in a project where `vue` isn't in `package.json`, or override ordering):

```js
import { defineConfig } from 'eslint/config';
import config from '@getresponse/eslint-config';

export default defineConfig(config, config.presets.vue);
```

Available entries on `config.presets`:

| Name | Description |
|---|---|
| `bestPractices`, `errors`, `es6`, `style`, `variables` | Core rule groups (always on in the default config) |
| `typescript` | TypeScript rules (auto-loaded when `typescript` is in `package.json`) |
| `react` | React + react-hooks (auto-loaded when `react` is in `package.json`) |
| `vue` | Vue 3 strongly-recommended (auto-loaded when `vue` is in `package.json`) |
| `jest` | Jest rules (auto-loaded when `jest` is in `package.json`) |
| `playwright` | Playwright rules (auto-loaded when `@playwright/test` / `playwright` is in `package.json`) |
| `a11y` | Accessibility rules via `eslint-plugin-jsx-a11y` (opt-in only) |

If the corresponding package is already in your `package.json`, the rules are loaded automatically — you only need `config.presets.X` for explicit composition or for a11y (which is never auto-loaded).

## Mixins

Additional opt-in rulesets — equivalent to `config.presets.a11y` above, kept for backward compatibility:

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

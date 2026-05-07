import type { Plugin } from '@eslint/core';
import { defineConfig } from 'eslint/config';
import { includeIgnoreFile } from '@eslint/compat';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import bestPractices from './rules/best-practices';
import errors from './rules/errors';
import es6 from './rules/es6';
import style from './rules/style';
import variables from './rules/variables';
import jest from './rules/jest';
import typescript from './rules/typescript';
import react from './rules/react';
import vue from './rules/vue';
import playwright from './rules/playwright';
import a11y from './mixins/a11y';
import { buildDynamicConfig } from './dynamic-config/buildDynamicConfig';
import { getGitIgnoreFile } from './dynamic-config/files';

const dynamicConfig = buildDynamicConfig();
const gitIgnoreFile = getGitIgnoreFile();

const config = defineConfig(
    {
        plugins: {
            '@stylistic': stylistic as Plugin,
        },
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                ...(dynamicConfig.esm ? {} : globals.commonjs),
                JSX: 'readonly',
                globalThis: 'writable',
            },
        },
    },
    bestPractices,
    errors,
    es6,
    style,
    variables,
    dynamicConfig.jest || dynamicConfig.shouldIncludeAll ? jest : [],
    dynamicConfig.typescript || dynamicConfig.shouldIncludeAll ? typescript : [],
    dynamicConfig.react || dynamicConfig.shouldIncludeAll ? react : [],
    dynamicConfig.vue || dynamicConfig.shouldIncludeAll ? vue : [],
    dynamicConfig.playwright || dynamicConfig.shouldIncludeAll ? playwright : [],
    gitIgnoreFile ? includeIgnoreFile(gitIgnoreFile) : [],
);

export = Object.assign(config, {
    presets: {
        bestPractices,
        errors,
        es6,
        style,
        variables,
        jest,
        typescript,
        react,
        vue,
        playwright,
        a11y,
    },
});

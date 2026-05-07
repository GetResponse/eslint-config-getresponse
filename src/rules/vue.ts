import { defineConfig } from 'eslint/config';
import vue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';

// eslint-plugin-vue ships its presets without a `files` filter so rules can
// reach `.ts` composables in Vue projects. In a mixed/non-Vue codebase that
// leaks rules like `vue/multi-word-component-names` onto unrelated `.ts`/`.tsx`
// files. Scope every preset entry to `.vue` files explicitly.
const vuePreset = vue.configs['flat/strongly-recommended'].map((cfg) => ({
    ...cfg,
    files: ['**/*.vue'],
}));

export = defineConfig(vuePreset, {
    files: ['**/*.vue'],
    languageOptions: {
        parserOptions: {
            parser: tseslint.parser,
            ecmaVersion: 2022,
            sourceType: 'module',
            ecmaFeatures: {
                jsx: true,
            },
            extraFileExtensions: ['.vue'],
        },
    },
    rules: {
        'vue/html-indent': ['warn', 4],
        'vue/multi-word-component-names': 'off',
        'vue/html-closing-bracket-spacing': [
            'warn',
            {
                startTag: 'never',
                endTag: 'never',
                selfClosingTag: 'never',
            },
        ],
        'vue/html-self-closing': [
            'warn',
            {
                html: {
                    void: 'always',
                    normal: 'any',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
        'require-atomic-updates': 'off',
        'no-undef': 'off',
        'vars-on-top': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
    },
});

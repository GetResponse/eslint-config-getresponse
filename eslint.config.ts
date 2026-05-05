import { defineConfig, globalIgnores } from 'eslint/config';
import config from '@getresponse/eslint-config';

export default defineConfig(globalIgnores(['dist/**', 'eslint.config.ts']), config);

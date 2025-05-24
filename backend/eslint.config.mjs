import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // Tus reglas personalizadas si las necesitas
    },
  },

  js.configs.recommended,

  {
    files: ['**/*.{js,mjs,cjs}'],
    name: 'prettier',
    rules: prettier.rules,
  },
]);

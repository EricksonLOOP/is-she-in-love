// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import { configs as tsConfigs } from '@typescript-eslint/eslint-plugin'; 
import { ESLint } from 'eslint'; 
/**
 * @type {ESLint.ConfigData} 
 */
const config = {
  // @ts-ignore
  ignores: ['eslint.config.mjs'],

 
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended', 
  ],

  
  languageOptions: {
    globals: {
      ...globals.node, 
      ...globals.jest, 
    },
    ecmaVersion: 2021, 
    sourceType: 'module', 
    parser: '@typescript-eslint/parser', 
    parserOptions: {
      tsconfigRootDir: __dirname, 
      project: './tsconfig.json', 
    },
  },

  
  rules: {
    '@typescript-eslint/no-explicit-any': 'off', 
    '@typescript-eslint/no-floating-promises': 'warn', 
    '@typescript-eslint/no-unsafe-argument': 'warn', 
  },
};

export default config;

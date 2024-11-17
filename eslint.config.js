/** @type {import('eslint').Linter.Config} */
export default {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020, // Para el soporte de ES6+ (en adelante)
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true, // Habilitar JSX
      },
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
    ],
    settings: {
      react: {
        version: 'detect', // Detectar la versión de React automáticamente
      },
    },
    rules: {
      // Tus reglas personalizadas aquí
    },
  };
  
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off',  // React no necesita estar en el scope con Next.js
    'react/prop-types': 'off',  // Desactivar las comprobaciones de PropTypes
    'import/no-unresolved': 'off',
    'import/no-duplicates': 'error',
    'no-console': 'warn',  // Mostrar advertencia si hay `console.log`
  },
};

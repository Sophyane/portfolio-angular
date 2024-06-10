import * as path from 'path';

export default [
  {
    files: ['*.ts'],
    languageOptions: {
      parserOptions: {
        project: path.join(process.cwd(), 'tsconfig.eslint.json'),
        createDefaultProgram: true,
      },
    },
    plugins: {
      '@typescript-eslint': {
        version: '^4.0.0',
      },
      '@angular-eslint': {
        version: '^12.0.0',
      },
    },
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      // Autres règles spécifiques pour les fichiers TypeScript
    },
  },
  {
    files: ['*.html'],
    plugins: {
      '@angular-eslint': {
        version: '^12.0.0',
      },
    },
    rules: {
      // Règles spécifiques pour les fichiers HTML
    },
  },
  // Inclure d'autres configurations si nécessaire
];
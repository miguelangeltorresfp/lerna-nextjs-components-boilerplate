/* Follow Guides
 * Videotutorial by Ben Awad - How to use Eslint with Typescript
 * https://www.youtube.com/watch?v=mg_pDqszL3g
 * Tutorial by Robert Cooper - Using ESLint and Prettier in a TypeScript Project
 * https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb
 */
module.exports = {
  // Order of import statements
  // https://dev.to/arpit73/eslint-and-prettier-for-react-apps-bonus-next-js-and-typescript-3e46
  plugins: ['simple-import-sort'],
  // parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    'react-app',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    'no-shadow': 'warn',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    // Rules to use Eslint with Next.js
    // https://dev.to/arpit73/eslint-and-prettier-for-react-apps-bonus-next-js-and-typescript-3e46
    'react/react-in-jsx-scope': 'error',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    // eslint-plugin-simple-import-sort rules
    'simple-import-sort/sort': 'error',
    'sort-imports': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
};

module.exports = {
    env: { es6: true },

    plugins: ['import'],

    extends: ['plugin:import/errors', 'plugin:import/warnings'],

    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module'
    },

    settings: {

        // Follow webpack resolver roles, it includes DirectoryNamedWebpackPlugin
        'import/resolver': {
            webpack: {
                config: './_tools/webpack/webpack.dev.js'
            }
        }
    },

    rules: {

        // Disallow modifying variables that are declared using const
        'no-const-assign': 'error',

        // /!\ If a variable is never reassigned, using the const declaration is better.
        'prefer-const': 'warn',

        // Require parens in arrow function arguments
        'arrow-parens': ['error', 'as-needed'],

        // Require space before/after arrow function’s arrow
        'arrow-spacing': ['error', { before: true, after: true }],

        //  Disallow duplicate imports
        'no-duplicate-imports': ['error', { includeExports: true }],

        // Verify calls of super() in constructors
        'constructor-super': 'error',

        // Disallow arrow functions where they could be confused with comparisons
        'no-confusing-arrow': ['error', { allowParens: true }],

        // Disallow duplicate name in class members
        'no-dupe-class-members': 'error',

        // Disallow use of this/super before calling super() in constructors.
        'no-this-before-super': 'error',

        // Disallow unnecessary constructor
        'no-useless-constructor': 'error',

        // Disallow renaming import, export, and destructured assignments to the same name
        'no-useless-rename': [
            'error',
            {
                ignoreDestructuring: false,
                ignoreImport: false,
                ignoreExport: false
            }
        ],

        // Suggest using template literals instead of string concatenation.
        'prefer-template': 'error',

        // Enforce Usage of Spacing in Template Strings
        'template-curly-spacing': 'error',

        // /!\ Disallow template literal placeholder syntax in regular strings
        'no-template-curly-in-string': 'warn',

        // Enforce spacing between rest and spread operators and their expressions
        'rest-spread-spacing': ['error', 'never'],

        // Import roles
        // https://github.com/benmosher/eslint-plugin-import

        // Prevent imports to folders in relative parent paths
        // Bug: https://github.com/benmosher/eslint-plugin-import/issues/1291
        // 'import/no-relative-parent-imports': 'error',

        // Prevent unnecessary path segments in import and require statements
        'import/no-useless-path-segments': 'error',

        // Ensures that there is no resolvable path back to this module via its dependencies
        'import/no-cycle': 'error',

        // Prevent importing the submodules of other modules
        // To define something as private:
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
        'import/no-internal-modules': ['error', { allow: ['**'] }],

        // Verifies that all named imports are part of the set of named exports in the referenced module
        'import/named': 'error',

        // Ensures an imported module can be resolved to a module on the local filesystem
        'import/no-unresolved': 'error',

        // Forbids the use of mutable exports with var or let
        'import/no-mutable-exports': 'error',

        // /!\ Reports use of a deprecated name, as indicated by a @deprecated
        'import/no-deprecated': 'warn',

        // /!\ Reports use of an exported name as a property on the default export
        'import/no-named-as-default-member': 'warn',

        // /!\ Reports use of an exported name as the locally imported name of a default export
        'import/no-named-as-default': 'warn',

        // Enforces having one or more empty lines after the last top-level import statement or require call
        'import/newline-after-import': 'error',

        // Enforce a convention in the order of require() / import statements
        'import/order': 'error',

        // Enforce exports to be last
        'import/exports-last': 'error',

        //  Enforce imports to be first
        'import/first': 'error'
    }
};

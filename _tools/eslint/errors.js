module.exports = {
    rules: {

        // Disallow the use of alert, confirm, and prompt
        'no-alert': 'error',

        // Disallow assignment in conditional statements
        'no-cond-assign': ['error', 'always'],

        // Disallow use of console in the node environment
        'no-console': 'error',

        // Disallow constant expressions in conditions
        'no-constant-condition': 'error',

        // Disallow the usage of debugger
        'no-debugger': 'error',

        // Disallow deleting variables
        'no-delete-var': 'error',

        // Disallow duplicate arguments in function definitions
        'no-dupe-args': 'error',

        // Disallow duplicate keys in object literals
        'no-dupe-keys': 'error',

        // Disallow a duplicate case label
        'no-duplicate-case': 'error',

        // Disallow unnecessary boolean casts
        'no-extra-boolean-cast': 'error',

        // Disallow extra parens
        'no-extra-parens': ['error', 'all', { ignoreJSX: 'multi-line' }],

        // Prevent inner declaration
        'no-inner-declarations': 'error',

        // Disallow empty statement
        'no-empty': 'error',

        // Disallow reassigning exceptions in catch clauses
        'no-ex-assign': 'error',

        // Disallow unnecessary semicolons
        'no-extra-semi': 'error',

        // Disallow Shadowing of Restricted Names
        'no-shadow-restricted-names': 'error',

        // Disallow sparse arrays
        'no-sparse-arrays': 'error',

        // Disallow template literal placeholder syntax in regular strings
        'no-template-curly-in-string': 'error',

        // Disallow unreachable code after return, throw, continue, and break statements
        'no-unreachable': 'error',

        // Disallow confusing multiline expressions
        'no-unexpected-multiline': 'error',

        // Require calls to isNaN() when checking for NaN
        'use-isnan': 'error',

        // Disallow assignments that can lead to race conditions due to usage of await or yield
        'require-atomic-updates': 'error',

        // Enforce comparing typeof expressions against valid strings
        'valid-typeof': ['error', { requireStringLiterals: true }]
    }
};

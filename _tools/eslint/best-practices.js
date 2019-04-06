module.exports = {

    // Import the recommended ESLint rules
    // https://eslint.org/docs/rules/
    extends: 'eslint:recommended',

    rules: {

        // Controls location of "use strict"; directives
        strict: ['error', 'function'],

        // Enforces return statements in callbacks of array’s methods
        'array-callback-return': 'error',

        // Specify the maximum cyclomatic complexity allowed in a program
        complexity: ['error', 10],

        // /!\ Require return statements to either always or never specify values
        'consistent-return': 'warn',

        // Specify curly brace conventions for all control statements
        curly: ['error', 'all'],

        // Require === and !==
        eqeqeq: 'error',

        // Make sure for-in loops have an if statement
        'guard-for-in': 'error',

        // Require Dot Notation
        'dot-notation': 'error',

        // Disallow assignment to native objects or read-only global variables
        'no-global-assign': 'error',

        // Enforce newline before dot
        'dot-location': ['error', 'property'],

        // /!\ Disallow return before else
        'no-else-return': 'warn',

        // Disallow Case Statement Fallthrough
        'no-fallthrough': 'error',

        // Disallow multiple spaces
        'no-multi-spaces': 'error',

        // Disallow Multiline Strings
        'no-multi-str': 'error',

        // Disallow unnecessary concatenation of strings
        'no-useless-concat': 'error',

        // Disallow redundant return statements
        'no-useless-return': 'error',

        // /!\ Disallow unnecessary escape usage
        'no-useless-escape': 'warn',

        // Disallow empty destructuring patterns
        'no-empty-pattern': 'error',

        // Disallow empty functions
        'no-empty-function': 'error',

        // Enforce a maximum number of classes per file
        'max-classes-per-file': ['error', 1],

        //  Disallow unnecessary function binding
        'no-extra-bind': 'error',

        // Disallow Reassignment of Function Parameters
        'no-param-reassign': 'error',

        // /!\  Disallow Functions in Loops
        'no-loop-func': 'warn',

        // /!\ Disallow async functions which have no await expression
        'require-await': 'warn',

        // Disallow unmodified conditions of loops
        'no-unmodified-loop-condition': 'error',

        // Require let or const instead of var
        'no-var': 'error',

        // /!\ Disallow providing the 10 radix
        radix: ['warn', 'as-needed'],

        // Disallow Yoda Conditions
        yoda: 'error'
    }
};

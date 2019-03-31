module.exports = {

    // Import the recommended ESLint rules
    // https://eslint.org/docs/rules/
    extends: 'eslint:recommended',

    rules: {

        // Controls location of "use strict"; directives
        'strict': ['error', 'function'],

        // Enforces return statements in callbacks of array’s methods
        'array-callback-return': 'error',

        // Specify the maximum cyclomatic complexity allowed in a program
        'complexity': ['error', 10],

        // /!\ Require return statements to either always or never specify values
        'consistent-return': 'warn',

        // Specify curly brace conventions for all control statements
        'curly': ['error', 'all'],

        // Require === and !==
        'eqeqeq': 'error',

        // Make sure for-in loops have an if statement
        'guard-for-in': 'error',

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

        // /!\ Disallow unnecessary escape usage
        'no-useless-escape': 'warn',

        // Disallow redundant return statements
        'no-useless-return': 'error',

        // /!\ Disallow providing the 10 radix
        'radix': ['warn', 'as-needed'],

        // Disallow Yoda Conditions
        'yoda': 'error'
    }
};

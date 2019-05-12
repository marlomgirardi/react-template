module.exports = {
    rules: {

        // /!\ Disallow variable declarations from shadowing variables declared in the outer scope
        'no-shadow': 'warn',

        // Disallow use of undeclared variables unless mentioned in a /* global */ block
        'no-undef': 'error',

        // Disallow Initializing to undefined
        'no-undef-init': 'error',

        // Disallow declaration of variables that are not used in the code
        'no-unused-vars': ['error', { vars: 'all' }],

        // /!\ Disallow early use for variables and classes
        'no-use-before-define': ['warn', 'nofunc'],

        // /!\ Require Variable Declarations to be at the top of their scope
        'vars-on-top': 'warn'
    }
}

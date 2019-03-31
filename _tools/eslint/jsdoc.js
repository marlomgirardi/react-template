module.exports = {

    // ESLint JSDoc support was deprecated: https://eslint.org/blog/2018/11/jsdoc-end-of-life
    // JSDoc: http://usejsdoc.org
    // Plugin: https://github.com/gajus/eslint-plugin-jsdoc

    rules: {

        // Must match with the exact signature
        'jsdoc/check-param-names': 'error',

        // Prevent invalid tag name like `@paramm`
        'jsdoc/check-tag-names': 'error',

        // Prefer native types over objects
        'jsdoc/check-types': 'error',

        // Enforces a consistent padding of the block description
        'jsdoc/newline-after-description': ['warn', 'always'],

        // Prevent invalid type
        'jsdoc/no-undefined-types': 'error',

        // Sentences should start with capitalized letter and ends with a dot
        'jsdoc/require-description-complete-sentence': 'warn',

        // Requires that all functions have a description
        'jsdoc/require-description': 'error',

        // Requires a hyphen before the @param description
        'jsdoc/require-hyphen-before-param-description': ['error', 'always'],

        // Requires that all function parameters are documented
        'jsdoc/require-param': 'error',

        // Requires that all function parameters have name
        'jsdoc/require-param-name': 'error',

        // Requires that @param tag has type value
        'jsdoc/require-param-type': 'error',

        // Requires returns are documented
        'jsdoc/require-returns': 'error',

        // Requires that @returns tag has type value
        'jsdoc/require-returns-type': 'error',

        // Checks if the return expression exists in function body and in the comment
        'jsdoc/require-returns-check': 'error',

        // Requires all types to be valid JSDoc or Closure compiler types without syntax errors
        'jsdoc/valid-types': 'error'
    }
};

// If you want information about what a rule does
// you can visite https://eslint.org/docs/rules/RULE_NAME

module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": ["error", 2], // 2 spaces indentation
        "linebreak-style": ["error","unix"], // line-breaks are unix
        "quotes": ["error", "single"], // enforces single quotes
        "semi": ["error", "always"], // semicolons must be there
        "no-var": "error", // only let and const
        "no-console": "allow", // allow console.log usage
        "no-template-curly-in-string": "warn", // warns if you use the `${}` syntax inside a string
        "array-callback-return": "error", // folding on an array must be done with a function that returns something
        "eqeqeq": "error", // disallow `==` in favor of `===`
        "no-global-assign": "error", // disalllow creating global variables without a declaration
        "no-implied-eval": "error", // disallow calling setTimeout and setInterval with strings for the function argument
        "no-param-reassign": "error", // prevent the redefining of a function
        "no-return-assign": "error", // disallow assigning a variable inside a return
        "no-self-compare": "error", // disallow `x === x`
        "no-sequences": "error", // disallow this weird thing `var a = (3, 5); // a = 5`
        "radix": "error", // force using a radix with `parseInt`
        "global-require": "error", // force require to be called at the beggining of files
        "handle-callback-err": "error", // force doing something with the error parameter of a callback
        "no-mixed-requires": "error", // require should not be mixed with variables
        "no-new-require": "error", // disallow using new with a require on the same line
    }
};

module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        "jest/globals": true
    },
    extends: ["eslint:recommended", "plugin:jest/recommended", "plugin:jest/style"],
    plugins: ["jest"],
    parserOptions: {
        ecmaVersion: "latest"
    },
    rules: {
    }
}

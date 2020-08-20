module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/no-parsing-error': [2, {
            'x-invalid-end-tag': false
        }],
        'no-undef': 'off',
        'camelcase': 'off',
        'indent': ['off', 4],
        'no-tabs': 'off',
        "space-before-function-paren": 0,
        'no-unused-expressions': 0
    }
}

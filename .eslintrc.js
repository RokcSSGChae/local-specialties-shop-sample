module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true
    },
    ignorePatterns: ['*.d.ts', '*.js'],
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript', 'plugin:prettier/recommended'],
    overrides: [],
    parserOptions: {
        ecmaVersion: '2020',
        type: 'module'
    },
    plugins: ['vue'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto'
            }
        ]
    }
};

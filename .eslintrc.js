module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',          // 使用 ESLint 推荐的规则
        'plugin:vue/vue3-essential',   // Vue 3 的基本规则
        'plugin:prettier/recommended'  // Prettier 推荐的规则
    ],
    parserOptions: {
        parser: 'babel-eslint',         // 用于解析 JavaScript 的 Babel 解析器
    },
    rules: {
        // 根据需要添加或修改规则
        'prettier/prettier': ['error', {
            // Prettier 规则的选项
            semi: false,
            singleQuote: true,
            trailingComma: 'es5',
        }],
    },
}

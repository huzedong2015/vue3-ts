module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
	//  "@vue/airbnb",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 空格缩进
		indent: ["off"],
		"@typescript-eslint/indent": ["error", 3, { SwitchCase: 1 }],

		// 不使用tab
		"no-tabs": "error",

		// 双引号
		quotes: ["error", "double"],

		// import 排序
		"import/order": "off",

		// 强制使用 Windows 换行符
		"linebreak-style": "off",

		// for in 循环使用if
		"guard-for-in": "off",

		// 不使用new
		"no-new": "off",

		// 引入文件必须再packagejson声明
		"import/no-extraneous-dependencies": "off",

		// 自增 自减
		"no-plusplus": ["error", { allowForLoopAfterthoughts: true }],

		// 箭头函数使用括号
		"arrow-parens": ["error", "always"],

		// 该规则可以强制或禁止使用命名函数表达式。
		"func-names": "off",

		// 修改函数参数
		"no-param-reassign": "off",

		// 只有一个使用默认导出
		"import/prefer-default-export": "off",

		// 后缀
		// "import/extensions": ["error", "always", {
		// 	"js": "never",
		// 	"vue": "never"
		// }],

		// 标签属性顺序
		"vue/attributes-order": "error",

		// 组件属性顺序
		"vue/order-in-components": "error"
  }
};

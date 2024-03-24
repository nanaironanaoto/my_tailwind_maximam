module.exports = {
  mode: "jit",
  prefix: "tw-",
  content: [
    "./layout/*.liquid",
    "./templates/*.{liquid, json}",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./assets/*.{liquid, js}",
    "./index.html"
  ],
  theme: {
    extend: {
      screens: {
        'max-md': { 'max': '768px' }
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.flex-flow-col': {
          flexFlow: 'column',
        },
        '.flex-flow-row': {
          flexFlow: 'row',
        },
        // ここに追加のスタイルを定義
        '.flex-flow-col-reverse': {
          flexFlow: 'column-reverse',
        },
        '.flex-flow-row-reverse': {
          flexFlow: 'row-reverse',
        },
      }
      // レスポンシブおよびホバーステートで利用可能にする
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ]
}
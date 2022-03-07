module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 100,
      unitPrecision: 2,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
      exclude: /node_modules/i,
    },
  },
};

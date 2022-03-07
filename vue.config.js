const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/': {
        target: '',
        secure: false,
        changeOrigin: true,
      },
    },
  },
});

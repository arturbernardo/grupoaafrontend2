module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: 'http://backendgrupoa.herokuapp.com',
    ws: true,
    changeOrigin: true
  }
}
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: 'http://backendgrupoa.herokuapp.com',
  }
}
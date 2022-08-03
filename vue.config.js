const { defineConfig } = require('@vue/cli-service')
const manifestJSON = require('./public/manifest.json')
module.exports = defineConfig({
  transpileDependencies: true,
  
  pwa: {
    name: "Alley Videojuegos",
    themeColor: "#7c4897",
    background_color: "#ffffff",
    display: "standalone",
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    icons: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/msapplication-icon-144x144.png'
    }
  }
})

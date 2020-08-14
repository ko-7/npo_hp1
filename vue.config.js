module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  
  "pages": {
    "top": {
      "entry": "src/pages/top/main.js",
      "template": "public/index.html",
      "filename": "index.html"
    },
    "organization": {
      "entry": "src/pages/organization/main.js",
      "template": "public/organization.html",
      "filename": "organization.html"
    },
    "contact":{
      "entry": "src/pages/contact/main.js",
      "template": "public/contact.html",
      "filename": "contact.html"
    },
    "management":{
      "entry": "src/pages/management/main.js",
      "template": "public/management.html",
      "filename": "management.html"
    }
  },

  // configureWebpack: {
  //   devServer: {
  //     watchOptions: {
  //       poll: true
  //     }
  //   }
  // },
}

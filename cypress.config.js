const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.kiwi.com/",
    viewportWidth: 1600,
    viewportHeight: 1200,
  },
})

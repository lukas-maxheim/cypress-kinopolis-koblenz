const {defineConfig} = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: 'https://www.kinopolis.de/ko',
  },
  e2e: {
    video: false
  }
});

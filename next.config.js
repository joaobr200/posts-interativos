const withImages = require("next-images");
module.exports = withImages({
  env: {
    API_URL: "http://localhost:8080",
  },
});

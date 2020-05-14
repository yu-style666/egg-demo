const path = require("path");

const nunjucks = {
  enable: true,
  package: "egg-view-nunjucks",
};

const ua = {
  enable: true,
  path: path.join(__dirname, "../lib/plugin/egg-ua"),
};

module.exports = { nunjucks, ua };

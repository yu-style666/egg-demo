const keys = "safeKey"; // <此处改为你自己的 Cookie 安全字符串>
const view = {
  defaultViewEngine: "nunjucks",
  mapping: {
    ".tpl": "nunjucks",
  },
};

// 添加 news 的配置项
const news = {
  pageSize: 5,
  serverUrl: "https://hacker-news.firebaseio.com/v0",
};

const robot = {
  ua: [/curl/i, /Baiduspider/i],
};

module.exports = { keys, view, news, robot };

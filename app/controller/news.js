const { Controller } = require("egg");

class NewsController extends Controller {
  async list() {
    const dataList = {
      list: [
        {
          id: 1,
          title: "this is news 1",
          url: "/news/1",
          time: "1589338232",
        },
        {
          id: 2,
          title: "this is news 2",
          url: "/news/2",
          time: "1589358232",
        },
      ],
    };
    await this.ctx.render("news/list.tpl", dataList);

    /* const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.news.list(page);
    await ctx.render("news/list.tpl", { list: newsList }); */
  }
}

module.exports = NewsController;

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hello world";
  }

  async isIOS() {
    this.ctx.body = `isIOS: ${this.ctx.isIOS}`;
  }
}

module.exports = HomeController;

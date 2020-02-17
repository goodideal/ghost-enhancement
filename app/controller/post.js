'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async getCount() {
    const { ctx } = this;
    const { slug } = ctx.params;
    ctx.body = ctx.db.get('posts.' + slug).value();
  }

  async increaseCount() {
    const { ctx } = this;
    const { slug } = ctx.params;
    ctx.db.update('posts.' + slug, n => (n ? n : 0) + 1).write();
    ctx.body = ctx.db.get('posts.' + slug).value();
  }
}

module.exports = HomeController;

"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async getViews() {
    const { ctx } = this;
    const { slug } = ctx.params;

    ctx.body = await ctx.service.post.getViews(slug);
  }

  async increaseViews() {
    const { ctx } = this;
    const { slug } = ctx.params;
    ctx.body = await ctx.service.post.increaseViews(slug);
  }
}

module.exports = HomeController;

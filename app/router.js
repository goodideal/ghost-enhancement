"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, config } = app;
  const { contextPath } = config;
  router.get("/", controller.home.index);

  router.get(`${contextPath}/post/counts/:slug`, controller.post.getCount);
  router.post(`${contextPath}/post/counts/:slug`, controller.post.increaseCount);
};

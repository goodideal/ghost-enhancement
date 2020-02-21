"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, config } = app;
  const { contextPath } = config;
  router.get(`${contextPath}/`, controller.home.index);

  router.get(`${contextPath}/post/views/:slug`, controller.post.getViews);
  router.post(`${contextPath}/post/views/:slug`, controller.post.increaseViews);
};

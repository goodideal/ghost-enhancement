'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/post/counts/:slug', controller.post.getCount)
  router.post('/post/counts/:slug', controller.post.increaseCount)
};

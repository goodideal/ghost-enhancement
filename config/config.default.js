/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1580971274902_9794";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.contextPath = process.env.CONTEXT_PATH || "enhance"

  config.lowdb = {
    path: process.env.DB_PATH || "/tmp/db.json"
  };

  config.security = {
    csrf: {
      enable: false
    }
  };

  return {
    ...config,
    ...userConfig
  };
};

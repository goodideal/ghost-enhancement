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

  config.contextPath = process.env.CONTEXT_PATH || "/enhance";
  const {
    MYSQL_URL,
    MYSQL_PORT,
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD
  } = process.env;
  
  config.mysql = {
    client: {
      host: MYSQL_URL || "rm-uf6vpht728q06k71d.mysql.rds.aliyuncs.com",
      port: MYSQL_PORT || "3306",
      user: MYSQL_USER || "blog",
      password: MYSQL_PASSWORD || "password",
      database: MYSQL_DATABASE || "blog",
      isPromise: true
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  return {
    ...config,
    ...userConfig
  };
};

"use strict";

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const sample = {
  posts: {
    slug1 : 0,
    slug2 : 0
  }
}
module.exports = {
  get db() {
    // console.log(this.app.config.lowdb)
    const adapter = new FileSync(this.app.config.lowdb.path);
    const db = low(adapter);
    db.defaults({ posts: {} }).write();

    return db;
  }
};

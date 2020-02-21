const Service = require("egg").Service;

class PostService extends Service {
  async initPostViews() {
    return await this.app.mysql.query(`
    CREATE TABLE posts_views (
      slug varchar(191) NOT NULL,
      views bigint(255) unsigned DEFAULT 1,
      PRIMARY KEY (slug)
    );
    `);
  }

  async getViews(slug) {
    if (!slug) return false;
    try {
      const postsViews = await this.app.mysql.get("posts_views", {
        slug: slug
      });
      return postsViews.views;
    } catch (e) {
      if (e.code === "ER_NO_SUCH_TABLE") {
        this.logger.warn("ER_NO_SUCH_TABLE: post_views");
        this.initPostViews();
      }
      return 0;
    }
  }

  async increaseViews(slug) {
    try {
      const result = await this.app.mysql.query(
        `
        INSERT INTO posts_views
          ( slug, views )
        VALUES 
          ( "${slug}", ${Math.round(Math.random() * 10)} )
        ON DUPLICATE KEY UPDATE
          slug = "${slug}",
          views = views + 1
        `
      );

      this.logger.info(result);
      if (result.affectedRows > 0) {
        return await this.getViews(slug);
      }
    } catch (e) {
      if (e.code === "ER_NO_SUCH_TABLE") {
        this.logger.warn("ER_NO_SUCH_TABLE: post_views");
        this.initPostViews();
      }
      return 0;
    }

    return false;
  }
}

module.exports = PostService;

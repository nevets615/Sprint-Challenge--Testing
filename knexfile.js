// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/games.db3"
    },
    useNullAsDefault: true,
    migrations: {
      tableName: "knex_migrations"
    }
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/testing.db3"
    },
    useNullAsDefault: true,
    migrations: {
      tableName: "knex_migrations"
    }
  }
};

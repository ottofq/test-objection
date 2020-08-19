const path = require("path");

module.exports = {
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "admin",
    database: "knex",
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
};

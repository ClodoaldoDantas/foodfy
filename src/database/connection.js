const { Pool } = require("pg");

const db = new Pool({
  user: "clodoaldo",
  password: 123,
  host: "localhost",
  port: 5432,
  database: "foodfy",
});

module.exports = db;

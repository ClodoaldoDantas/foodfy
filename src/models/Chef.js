const db = require("../database/connection");
const date = require("../utils/date");

module.exports = {
  findAll() {
    const query = "SELECT * FROM chefs";
    return db.query(query);
  },
  create(data) {
    const query = `
      INSERT INTO chefs(name, avatar_url, created_at) VALUES ($1, $2, $3)
    `;
    const values = [data.name, data.avatar_url, date(Date.now()).iso];
    return db.query(query, values);
  },
};

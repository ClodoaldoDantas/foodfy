const db = require("../database/connection");
const date = require("../utils/date");

module.exports = {
  findAll() {
    const query = "SELECT * FROM chefs";
    return db.query(query);
  },
  findById(id) {
    const query = `
      SELECT chefs.*, count(recipes) as total_recipes FROM chefs
      LEFT JOIN recipes ON chefs.id = recipes.chef_id
      WHERE chefs.id = $1
      GROUP BY chefs.id;
    `;
    return db.query(query, [id]);
  },
  create(data) {
    const query = `
      INSERT INTO chefs(name, avatar_url, created_at) VALUES ($1, $2, $3)
    `;
    const values = [data.name, data.avatar_url, date(Date.now()).iso];
    return db.query(query, values);
  },
};

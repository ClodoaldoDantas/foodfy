const db = require("../database/connection");
const date = require("../utils/date");

module.exports = {
  findAll() {
    const query = "SELECT * FROM recipes";
    return db.query(query);
  },
  findById(id) {
    const query = "SELECT * FROM recipes WHERE id = $1";
    return db.query(query, [id]);
  },
  create(data) {
    const query = `
      INSERT INTO recipes(
        image,
        title,
        ingredients,
        preparation,
        information,
        created_at
      ) VALUES ($1, $2, $3, $4, $5, $6)
    `;

    const values = [
      data.image,
      data.title,
      data.ingredients,
      data.preparation,
      data.information,
      date(Date.now()).iso,
    ];

    return db.query(query, values);
  },
  update(data) {
    const query = `
      UPDATE recipes SET
        image = ($1),
        title = ($2),
        ingredients = ($3),
        preparation = ($4),
        information = ($5)
      WHERE id = $6
    `;

    const values = [
      data.image,
      data.title,
      data.ingredients,
      data.preparation,
      data.information,
      data.id,
    ];

    return db.query(query, values);
  },
  delete(id) {
    const query = "DELETE FROM recipes WHERE id = $1";
    return db.query(query, [id]);
  },
};
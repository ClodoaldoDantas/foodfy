const db = require("../database/connection");
const date = require("../helpers/date");

module.exports = {
  findAll() {
    const query = `
      SELECT recipes.*, chefs.name as author 
      FROM recipes INNER JOIN chefs ON recipes.chef_id = chefs.id
    `;

    return db.query(query);
  },
  findById(id) {
    const query = `
      SELECT recipes.*, chefs.name as author 
      FROM recipes INNER JOIN chefs ON recipes.chef_id = chefs.id
      WHERE recipes.id = $1
    `;
    return db.query(query, [id]);
  },
  findOne(data) {
    const column = Object.keys(data)[0];
    const query = `
      SELECT recipes.*, chefs.name as author 
      FROM recipes INNER JOIN chefs ON recipes.chef_id = chefs.id
      WHERE ${column} = $1
    `;
    return db.query(query, [data[column]]);
  },
  create(data) {
    const query = `
      INSERT INTO recipes(
        chef_id,
        image,
        title,
        ingredients,
        preparation,
        information,
        created_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;

    const values = [
      data.chef_id,
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
        chef_id = ($1),
        image = ($2),
        title = ($3),
        ingredients = ($4),
        preparation = ($5),
        information = ($6)
      WHERE id = $7
    `;

    const values = [
      data.chef_id,
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

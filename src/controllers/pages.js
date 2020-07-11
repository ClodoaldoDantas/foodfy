const Recipe = require("../models/Recipe");

module.exports = {
  index(req, res) {
    Recipe.findAll()
      .then((data) => res.render("pages/index", { recipes: data.rows }))
      .catch((err) => console.log(err.message));
  },
  about(req, res) {
    return res.render("pages/about");
  },
  recipes(req, res) {
    Recipe.findAll()
      .then((data) => res.render("pages/recipes", { recipes: data.rows }))
      .catch((err) => console.log(err.message));
  },
  show(req, res) {
    const { id } = req.params;

    Recipe.findById(id)
      .then((data) => res.render("pages/recipe", { recipe: data.rows[0] }))
      .catch((err) => console.log(err.message));
  },
};

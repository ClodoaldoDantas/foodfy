const Recipe = require("../models/Recipe");

module.exports = {
  async index(req, res) {
    try {
      const data = await Recipe.findAll();
      return res.render("pages/index", { recipes: data.rows });
    } catch (err) {
      console.log(err.message);
    }
  },
  about(req, res) {
    return res.render("pages/about");
  },
  async recipes(req, res) {
    try {
      const data = await Recipe.findAll();
      return res.render("pages/recipes", { recipes: data.rows });
    } catch (err) {
      console.log(err.message);
    }
  },
  async show(req, res) {
    try {
      const { id } = req.params;
      const data = await Recipe.findById(id);
      return res.render("pages/recipe", { recipe: data.rows[0] });
    } catch (err) {
      console.log(err.message);
    }
  },
};

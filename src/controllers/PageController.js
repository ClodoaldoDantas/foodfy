const Recipe = require("../models/Recipe");

module.exports = {
  async index(req, res) {
    const { filter } = req.query;

    try {
      const data = filter
        ? await Recipe.findAll(filter)
        : await Recipe.findAll();

      return res.render("pages/index", { recipes: data.rows, filter });
    } catch (err) {
      console.log(err.message);
    }
  },
  about(req, res) {
    return res.render("pages/about");
  },
  async recipes(req, res) {
    const { filter } = req.query;

    try {
      const data = filter
        ? await Recipe.findAll(filter)
        : await Recipe.findAll();

      return res.render("pages/recipes", { recipes: data.rows, filter });
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

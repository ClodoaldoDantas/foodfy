const Chef = require("../models/Chef");
const Recipe = require("../models/Recipe");
const validateFields = require("../helpers/validate");

module.exports = {
  async index(req, res) {
    try {
      const data = await Chef.findAll();
      res.render("admin/chefs/index", { chefs: data.rows });
    } catch (err) {
      console.log(err.message);
    }
  },
  async show(req, res) {
    try {
      const { id } = req.params;
      const chef = await Chef.findById(id);
      const recipes = await Recipe.findOne({ chef_id: id });

      res.render("admin/chefs/show", {
        recipes: recipes.rows,
        chef: chef.rows[0],
      });
    } catch (err) {
      console.log(err.message);
    }
  },
  create(req, res) {
    return res.render("admin/chefs/create");
  },
  async post(req, res) {
    const { name, avatar_url } = req.body;
    const validate = validateFields({ name, avatar_url });

    if (!validate) return res.send("Please, fill all fields");

    try {
      await Chef.create({ name, avatar_url });
      res.redirect("/admin/chefs");
    } catch (err) {
      console.log(err.message);
    }
  },
};

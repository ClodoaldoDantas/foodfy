const Recipe = require("../models/Recipe");
const Chef = require("../models/Chef");
const validateFields = require("../helpers/validate");

module.exports = {
  async index(req, res) {
    try {
      const data = await Recipe.findAll();
      res.render("admin/recipes/index", { recipes: data.rows });
    } catch (err) {
      console.log(err.message);
    }
  },
  async show(req, res) {
    try {
      const { id } = req.params;
      const data = await Recipe.findById(id);
      res.render("admin/recipes/show", { recipe: data.rows[0] });
    } catch (err) {
      console.log(err.message);
    }
  },
  async create(req, res) {
    try {
      const data = await Chef.findAll();
      res.render("admin/recipes/create", { chefs: data.rows });
    } catch (err) {
      console.log(err.message);
    }
  },
  async post(req, res) {
    const validate = validateFields({
      title: req.body.title,
      image: req.body.image,
      ingredients: req.body.ingredients,
      preparation: req.body.preparation,
    });

    if (!validate) return res.send("Please, fill all fields!");

    try {
      await Recipe.create(req.body);
      res.redirect("/admin/recipes");
    } catch (err) {
      console.log(err.message);
    }
  },
  async edit(req, res) {
    try {
      const { id } = req.params;
      const recipe = await Recipe.findById(id);
      const chefs = await Chef.findAll();

      res.render("admin/recipes/edit", {
        recipe: recipe.rows[0],
        chefs: chefs.rows,
      });
    } catch (err) {
      console.log(err.message);
    }
  },
  async put(req, res) {
    const validate = validateFields({
      title: req.body.title,
      image: req.body.image,
      ingredients: req.body.ingredients,
      preparation: req.body.preparation,
    });

    if (!validate) return res.send("Please, fill all fields!");

    try {
      await Recipe.update(req.body);
      res.redirect(`/admin/recipes/${req.body.id}`);
    } catch (err) {
      console.log(err.message);
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.body;
      await Recipe.delete(id);
      res.redirect("/admin/recipes");
    } catch (err) {
      console.log(err.message);
    }
  },
};

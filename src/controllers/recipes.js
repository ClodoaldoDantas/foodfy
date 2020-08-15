const Recipe = require("../models/Recipe");
const Chef = require("../models/Chef");
const { validateFields } = require("../utils/validate");

module.exports = {
  index(req, res) {
    Recipe.findAll()
      .then((data) => res.render("admin/recipes/index", { recipes: data.rows }))
      .catch((err) => console.log(err.message));
  },
  show(req, res) {
    const { id } = req.params;

    Recipe.findById(id)
      .then((data) =>
        res.render("admin/recipes/show", { recipe: data.rows[0] })
      )
      .catch((err) => console.log(err.message));
  },
  create(req, res) {
    Chef.findAll()
      .then((data) => res.render("admin/recipes/create", { chefs: data.rows }))
      .catch((err) => console.log(err.message));
  },
  post(req, res) {
    const validate = validateFields({
      title: req.body.title,
      image: req.body.image,
      ingredients: req.body.ingredients,
      preparation: req.body.preparation,
    });

    if (!validate) return res.send("Please, fill all fields!");

    Recipe.create(req.body)
      .then(() => res.redirect("/admin/recipes"))
      .catch((err) => console.log(err.message));
  },
  edit(req, res) {
    const { id } = req.params;

    Recipe.findById(id)
      .then((recipe) =>
        Chef.findAll()
          .then((chefs) => {
            res.render("admin/recipes/edit", {
              recipe: recipe.rows[0],
              chefs: chefs.rows,
            });
          })
          .catch((err) => console.log(err.message))
      )
      .catch((err) => console.log(err.message));
  },
  put(req, res) {
    const validate = validateFields({
      title: req.body.title,
      image: req.body.image,
      ingredients: req.body.ingredients,
      preparation: req.body.preparation,
    });

    if (!validate) return res.send("Please, fill all fields!");

    Recipe.update(req.body)
      .then(() => res.redirect(`/admin/recipes/${req.body.id}`))
      .catch((err) => console.log(err.message));
  },
  delete(req, res) {
    const id = Number(req.body.id);

    Recipe.delete(id)
      .then(() => res.redirect("/admin/recipes"))
      .catch((err) => console.log(err.message));
  },
};

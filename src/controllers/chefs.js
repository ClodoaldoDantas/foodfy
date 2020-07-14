const Chef = require("../models/Chef");
const Recipe = require("../models/Recipe");
const { validateFields } = require("../utils/validate");

module.exports = {
  index(req, res) {
    Chef.findAll()
      .then((result) => res.render("admin/chefs/index", { chefs: result.rows }))
      .catch((err) => console.log(err.message));
  },
  show(req, res) {
    const { id } = req.params;

    Chef.findById(id)
      .then((result) => {
        const chef = result.rows[0];
        Recipe.findOne({ chef_id: id })
          .then((result) => {
            const recipes = result.rows;
            return res.render("admin/chefs/show", { recipes, chef });
          })
          .catch((err) => console.log(err.message));
      })
      .catch((err) => console.log(err.message));
  },
  create(req, res) {
    return res.render("admin/chefs/create");
  },
  post(req, res) {
    const { name, avatar_url } = req.body;
    const validate = validateFields({ name, avatar_url });

    if (!validate) return res.send("Please, fill all fields");

    Chef.create({ name, avatar_url })
      .then(() => res.redirect("/admin/chefs"))
      .catch((err) => console.log(err.message));
  },
};

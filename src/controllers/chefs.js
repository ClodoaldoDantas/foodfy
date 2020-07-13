const Chef = require("../models/Chef");
const { validateFields } = require("../utils/validate");

module.exports = {
  index(req, res) {
    Chef.findAll()
      .then((result) => res.render("admin/chefs/index", { chefs: result.rows }))
      .catch((err) => console.log(err.message));
  },
  show(req, res) {
    res.render("admin/chefs/show");
  },
  create(req, res) {
    return res.render("admin/chefs/create");
  },
  post(req, res) {
    const { name, avatar_url } = req.body;
    const validate = validateFields({ name, avatar_url });

    if (!validate) res.send("Please, fill all fields");

    Chef.create({ name, avatar_url })
      .then(() => res.redirect("/admin/chefs"))
      .catch((err) => console.log(err.message));
  },
};

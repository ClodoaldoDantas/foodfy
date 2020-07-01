const recipes = require("../../data.json");

exports.index = (req, res) => {
  res.render("admin/index", { recipes });
};

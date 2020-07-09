const data = require("../../data.json");

exports.index = (req, res) => {
  const filteredRecipes = data.recipes.slice(0, 6);
  return res.render("pages/index", { recipes: filteredRecipes });
};

exports.about = (req, res) => {
  return res.render("pages/about");
};

exports.recipes = (req, res) => {
  return res.render("pages/recipes", { recipes: data.recipes });
};

exports.show = (req, res) => {
  const { id } = req.params;
  const recipe = data.recipes[id];

  return res.render("pages/recipe", { recipe });
};

const recipes = require("../../data.json");

exports.index = (req, res) => {
  const filteredRecipes = recipes.slice(0, 6);
  res.render("pages/index", { recipes: filteredRecipes });
};

exports.about = (req, res) => {
  res.render("pages/about");
};

exports.recipes = (req, res) => {
  res.render("pages/recipes", { recipes });
};

exports.show = (req, res) => {
  const { index } = req.params;
  const recipe = recipes[index];

  res.render("pages/recipe", { recipe });
};

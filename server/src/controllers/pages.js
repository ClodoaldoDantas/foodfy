const recipes = require("../../data.json");

exports.index = (req, res) => {
  const filteredRecipes = recipes.slice(0, 6);
  res.render("index", { recipes: filteredRecipes });
};

exports.about = (req, res) => {
  res.render("about");
};

exports.recipes = (req, res) => {
  res.render("recipes", { recipes });
};

exports.show = (req, res) => {
  const { index } = req.params;
  const recipe = recipes[index];

  res.render("recipe", { recipe });
};

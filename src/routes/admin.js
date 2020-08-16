const express = require("express");
const routes = express.Router();

const recipeController = require("../controllers/RecipeController");
const chefController = require("../controllers/ChefController");

routes.get("/admin", (req, res) => res.redirect("/admin/recipes"));

routes.get("/admin/recipes", recipeController.index);
routes.get("/admin/recipes/create", recipeController.create);
routes.get("/admin/recipes/:id", recipeController.show);
routes.get("/admin/recipes/:id/edit", recipeController.edit);
routes.post("/admin/recipes", recipeController.post);
routes.put("/admin/recipes", recipeController.put);
routes.delete("/admin/recipes", recipeController.delete);

routes.get("/admin/chefs", chefController.index);
routes.get("/admin/chefs/create", chefController.create);
routes.get("/admin/chefs/:id", chefController.show);
routes.post("/admin/chefs", chefController.post);
routes.get("/admin/chefs/:id/edit", chefController.edit);
routes.put("/admin/chefs", chefController.put);
routes.delete("/admin/chefs", chefController.delete);

module.exports = routes;

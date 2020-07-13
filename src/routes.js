const express = require("express");
const routes = express.Router();

// controllers
const pages = require("./controllers/pages");
const recipes = require("./controllers/recipes");
const chefs = require("./controllers/chefs");

// page routes
routes.get("/", pages.index);
routes.get("/about", pages.about);
routes.get("/recipes", pages.recipes);
routes.get("/recipes/:id", pages.show);

// admin routes
routes.get("/admin", (req, res) => res.redirect("/admin/recipes"));

routes.get("/admin/recipes", recipes.index);
routes.get("/admin/recipes/create", recipes.create);
routes.get("/admin/recipes/:id", recipes.show);
routes.get("/admin/recipes/:id/edit", recipes.edit);
routes.post("/admin/recipes", recipes.post);
routes.put("/admin/recipes", recipes.put);
routes.delete("/admin/recipes", recipes.delete);

routes.get("/admin/chefs", chefs.index);
routes.get("/admin/chefs/create", chefs.create);

module.exports = routes;

const express = require("express");
const routes = express.Router();

// controllers
const pages = require("./controllers/pages");
const admin = require("./controllers/admin");

// page routes
routes.get("/", pages.index);
routes.get("/about", pages.about);
routes.get("/recipes", pages.recipes);
routes.get("/recipes/:id", pages.show);

// admin routes
routes.get("/admin", (req, res) => res.redirect("/admin/recipes"));
routes.get("/admin/recipes", admin.index);
routes.get("/admin/recipes/create", admin.create);
routes.get("/admin/recipes/:id", admin.show);
routes.get("/admin/recipes/:id/edit", admin.edit);
routes.post("/admin/recipes", admin.post);
routes.put("/admin/recipes", admin.put);
routes.put("/admin/recipes", admin.put);
routes.delete("/admin/recipes", admin.delete);

module.exports = routes;

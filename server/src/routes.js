const express = require("express");
const routes = express.Router();

// controllers
const pages = require("./controllers/pages");
const admin = require("./controllers/admin");

// page routes
routes.get("/", pages.index);
routes.get("/about", pages.about);
routes.get("/recipes", pages.recipes);
routes.get("/recipes/:index", pages.show);

// admin routes
routes.get("/admin/recipes", admin.index);

module.exports = routes;

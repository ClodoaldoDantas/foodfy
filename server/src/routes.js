const express = require("express");
const routes = express.Router();

// controllers
const pages = require("./controllers/pages");

// page routes
routes.get("/", pages.index);
routes.get("/about", pages.about);
routes.get("/recipes", pages.recipes);
routes.get("/recipes/:index", pages.show);

module.exports = routes;

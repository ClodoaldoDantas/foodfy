const express = require("express");
const routes = express.Router();

const pageController = require("../controllers/PageController");

routes.get("/", pageController.index);
routes.get("/about", pageController.about);
routes.get("/recipes", pageController.recipes);
routes.get("/recipes/:id", pageController.show);
routes.get("/chefs", pageController.chefs);

module.exports = routes;

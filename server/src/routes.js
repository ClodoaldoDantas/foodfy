const express = require('express');
const routes = express.Router();

const recipes = require('./data/recipes');
const featuredRecipes = recipes.slice(0, 6);

routes.get('/', (req, res) => {
  res.render('index', { recipes: featuredRecipes });
});

routes.get('/about', (req, res) => {
  res.render('about');
});

routes.get('/recipes', (req, res) => {
  res.render('recipes', { recipes });
});

routes.get('/recipes/:index', (req, res) => {
  const { index } = req.params;
  const recipe = recipes[index];

  res.render('recipe', { recipe });
});

module.exports = routes;
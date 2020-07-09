const { validateFields } = require("../utils/validate");
const data = require("../../data.json");
const fs = require("fs");

exports.index = (req, res) => {
  res.render("admin/index", { recipes: data.recipes });
};

exports.show = (req, res) => {
  const { id } = req.params;
  const recipe = data.recipes[id];

  return res.render("admin/show", { recipe, id });
};

exports.create = (req, res) => {
  const { error } = req.query;

  if (error) {
    return res.render("admin/create", {
      message: "Erro ao salvar: preencha os campos obrigatórios",
    });
  }

  return res.render("admin/create");
};

exports.post = (req, res) => {
  const {
    title,
    author,
    image,
    ingredients,
    preparation,
    information,
  } = req.body;

  const validate = validateFields({
    title,
    author,
    image,
    ingredients,
    preparation,
  });

  if (!validate) return res.redirect("/admin/recipes/create?error=true");

  const recipe = {
    title,
    author,
    image,
    ingredients,
    preparation,
    information,
  };

  data.recipes = [recipe, ...data.recipes];

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send("Write file error!");
    return res.redirect("/admin/recipes");
  });
};

exports.edit = (req, res) => {
  const { error } = req.query;
  const { id } = req.params;
  const recipe = data.recipes[id];

  if (error) {
    res.render("admin/edit", {
      recipe,
      id,
      message: "Erro ao salvar: preencha os campos obrigatórios",
    });
  } else {
    res.render("admin/edit", { recipe, id });
  }
};

exports.put = (req, res) => {
  const {
    title,
    author,
    image,
    ingredients,
    preparation,
    information,
  } = req.body;

  const id = Number(req.body.id);

  const validate = validateFields({
    title,
    author,
    image,
    ingredients,
    preparation,
  });

  if (!validate) return res.redirect(`/admin/recipes/${id}/edit?error=true`);

  const recipe = {
    title,
    author,
    image,
    ingredients,
    preparation,
    information,
  };

  data.recipes[id] = recipe;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send("Write file error!");
    return res.redirect("/admin/recipes");
  });
};

exports.delete = (req, res) => {
  const id = Number(req.body.id);
  data.recipes.splice(id, 1);

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send("Write file error!");
    return res.redirect("/admin/recipes");
  });
};

module.exports = {
  index(req, res) {
    res.render("admin/chefs/index");
  },
  create(req, res) {
    return res.render("admin/chefs/create");
  },
};

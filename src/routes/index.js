const adminRoutes = require("./admin");
const pageRoutes = require("./pages");

module.exports = (app) => {
  app.use(adminRoutes);
  app.use(pageRoutes);
};

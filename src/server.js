const express = require("express");
const nunjucks = require("nunjucks");
const methodOverride = require("method-override");
const path = require("path");

const app = express();
const routes = require("./routes");
const viewDir = path.resolve(__dirname, "views");
const publicDir = path.resolve(__dirname, "public");

app.set("view engine", "njk");

nunjucks.configure(viewDir, {
  express: app,
  autoescape: false,
  noCache: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicDir));
app.use(methodOverride("_method"));
app.use(routes);

app.listen(5000, () =>
  console.log("🚀 Server running on http://localhost:5000")
);

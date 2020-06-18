const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');

const app = express();
const routes = require('./routes');
const viewDir = path.resolve(__dirname, 'views');
const publicDir = path.resolve(__dirname, 'public');

app.set('views', viewDir);
app.set('view engine', 'njk');

nunjucks.configure(viewDir, {
  express: app,
  autoescape: false,
  noCache: true
});

app.use(express.static(publicDir));
app.use(routes);

app.listen(5000, () => console.log('Server running in http://localhost:5000'));
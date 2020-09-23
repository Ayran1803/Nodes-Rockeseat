const express = require('express');
const mongosse = require('mongoose');
const requireDir = require('require-dir');

//iniciando app
const app = express();

//iniciando o DB
mongosse.connect('mongodb://localhost:27014/nodeapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
requireDir('./src/model');

const Product = mongosse.model('Product');

//primeira rota
app.use('/api', require('./src/routes'));

app.listen('3000');

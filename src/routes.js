const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  // Product.create({
  //   tile: 'React Native',
  //   descripton: 'Dentro da descrição',
  //   url: 'dentro do url',
  // });
  // res.send('Hello Mundo!');
});

module.exports = routes;

'use strict';

const Hapi = require('hapi');

const ingredients = require('./resources/ingredients.json');
const doughTypes = require('./resources/doughTypes.json');

const getPizzaIngredients = (req, resp) => {
  console.log('GET /ingredients');
  return resp(ingredients);
};

const getDoughTypes = (req, resp) => {
  console.log('GET /doughTypes');
  return resp(doughTypes);
};

const server = new Hapi.Server({
  connections: {
    routes: {
      cors: true,
    },
  },
});

server.connection({
  host: 'localhost',
  port: 8001,
});

server.route({
  method: 'GET',
  path: '/ingredients',
  handler: getPizzaIngredients,
});

server.route({
  method: 'GET',
  path: '/doughTypes',
  handler: getDoughTypes,
});

server.start(err => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri} 😎`);
});

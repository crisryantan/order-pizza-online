'use strict';

const Hapi = require('hapi');

const launches = require('./resources/ingredients.json');

const getPizzaIngredients = (req, resp) => {
  console.log('GET /ingredients');
  return resp(launches);
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

server.start(err => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri} 😎`);
});

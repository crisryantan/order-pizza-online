'use strict';

const Hapi = require('hapi');

const launches = require('./resources/recipes.json');

const getPizzaRecipesHandler = (req, resp) => {
  console.log('GET /recipes');
  return resp(launches);
};

const server = new Hapi.Server({
  connections: {
    routes: {
      cors: true,
    }
  }
});

server.connection({
  host: 'localhost',
  port: 8001,
});

server.route({
  method: 'GET',
  path: '/recipes', 
  handler: getPizzaRecipesHandler
});

server.start((err) => {
  if (err) { throw err; }
  console.log(`Server running at: ${server.info.uri} 😎`)
});
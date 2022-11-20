const express = require('express');
const app = express();
const hbs = require('hbs');
const PORT = 3000;

// optional partial response setup
app.set('views', './views');
app.set('view engine', 'hbs');
hbs.registerPartials('./views/partials');

// optional "database" for responses
const database = {
  joshua: {
    firstName: 'joshua',
    lastName: 'burke',
    favoriteAnimal: 'dogs',
  },
  samantha: {
    firstName: 'samantha',
    lastName: 'doe',
    favoriteAnimal: 'horses',
  },
  john: {
    firstName: 'john',
    lastName: 'doe',
    favoriteAnimal: 'cats',
  },
};

// path: '/'
// action: function(request, response)
//   request: box for data about what the browser wants
//   response: box for data about what the server will send
app.get('/', (request, response) => {
  const query = request.query;
  const keys = Object.keys(database);
  const people = keys.map((key) => database[key]);
  response.render('index', { people });
});

// path: '/joshua', '/samantha', '/john/, route
//   uses a parameter to detemine which object to send back
app.get('/:name', (request, response) => {
  const query = request.query;
  const path = request.path;
  const params = request.params;
  console.log({ path, params, query });

  response.contentType = 'application/json';
  const name = request.params.name;
  let responseData = JSON.stringify(database[name]);
  response.send(responseData);
});

// start an infinite listening loop, and wait for requests
// when a request arrives, respond to the request
app.listen(PORT, () => {
  console.log(`Example app running at:  http://localhost:${PORT}/`);
});

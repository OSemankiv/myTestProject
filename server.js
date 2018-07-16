const express       = require ('express');
const bodyParser    = require ('body-parser');

const app = express();

const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({ extended: true}));

let users = [{
                id: 1,
                name: 'John',
                age: 23
              },
              {
                id: 2,
                name: 'Jill',
                age: 25
              },
              {
                id: 3,
                name: 'Ted',
                age: 30
              }];


  app.get('/', (req,res) => {
      res.send('API');
  });

  app.get('/users', (req, res) => {
    res.send(users);
  })

  app.get('/users/:id', (req,res) => {
    let user = users.find( (user) => {
        return user.id === Number (req.params.id);
    });
    res.send (user);
  });

  app.post ('/users', (req,res) => {
    let user = {
      id: Date.now(),
      name: req.body.name
    }
    users.push(user);
    res.send(user);
  });

  app.put('/users/:id', (req,res) => {
    let user = users.find( (user) => {
        return user.id === Number (req.params.id);
    });
    user.name = req.body.name;
    res.sendStatus(200);
  });

  app.delete(('/users/:id'), (req,res) => {
    users = users.filter ((user) => {
      return user.id !== Number(req.params.id);
    });
    res.sendStatus(200);
  });

  app.listen(port, () => {
    console.log('Server is listening on '+ port);
  });

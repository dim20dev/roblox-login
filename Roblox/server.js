const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// Fake login handler
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log('User attempted login:', username, password);
  res.send('Login received! This is just a test server.');
});

// Move frontend to "public" folder
// so static files work correctly

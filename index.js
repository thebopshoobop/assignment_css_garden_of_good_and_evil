const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const fs = require('fs');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const port = process.env.PORT || '3000';

// POST middleware
app.use(bodyParser.urlencoded({ extended: true }));
// Cookie middleware
app.use(cookieParser());

// Templates!
app.engine('handebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  // get status from cookie if it's set or use defaults
  let status = theCookie || {
    good: true,
    food: '',
    color: '',
    insanity: 0
  };
  // respond  with our template
  res.render('index', status);
  res.end;
});

app.post('/', (req, res) => {
  // parse post data
  // set cookie
  // redirect back
});

app.listen(port);

// Widget List
// * Radio: good/evil
// * Text: favorite food
// * Dropdown: favorite color
// * Range Slider: insanity level

let express = require('express');
let uuid = require('uuid/v1');
let exphbs = require('express-handlebars');
let app = express();

const port = process.env.PORT || '3000';

// parsers
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var anythingReally = {};
var colorArray = ['Green', 'Red', 'Orange', 'Purple', 'Yellow', 'Blue'];
// Templates!
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// POST middleware
app.use(bodyParser.urlencoded({ extended: true }));
// Cookie middleware
app.use(cookieParser());

app.get('/', (req, res) => {
  // get status from cookie if it's set or use defaults
  let theCookie = CheckForCookie(req, res);
  console.log('this is the get');
  let formStatus = anythingReally[theCookie] || {
    good: true,
    food: 'Soylent Green',
    color: 'Green',
    insanity: 0
  };
  console.log(formStatus);
  res.render('index', {
    status: formStatus,
    colors: colorArray
  });
});

app.post('/', (req, res) => {
  // parse post data
  let formStatus = {
    good: Boolean(Number(req.body.goodbad)),
    food: req.body.food,
    color: req.body.color,
    insanity: req.body.insanity
  };
  // set cookie
  let currentCookie = CheckForCookie(req, res);
  anythingReally[currentCookie] = formStatus;
  res.redirect('back');
});

app.listen(port, () => {
  console.log('Serving!');
});
var CheckForCookie = function(requestedFrom, responseFrom) {
  // console.log(anythingReally);
  let currentCookie = requestedFrom.cookies.uuid;
  if (!currentCookie) {
    currentCookie = uuid();
  }

  responseFrom.cookie('uuid', currentCookie);
  return currentCookie;
};

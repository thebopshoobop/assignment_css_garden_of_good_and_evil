let express = require("express");
let uuid = require("uuid/v1");
let exphbs = require("express-handlebars");
let app = express();
var dataObject = require("./Data");
const port = process.env.PORT || "3000";

// parsers
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
var anythingReally = {};
var colorArray = ["Green", "Red", "Orange", "Purple", "Yellow", "Blue"];

// Templates!
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// POST middleware
app.use(bodyParser.urlencoded({ extended: true }));
// Cookie middleware
app.use(cookieParser());
// Static file middleware
app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
  // get status from cookie if it's set or use defaults
  let theCookie = getCookie(req, res);
  // Make sure we have a user object
  let userObject = anythingReally[theCookie];
  userObject = userObject || {
    good: true,
    food: "Soylent Green",
    color: "Green",
    insanity: 0
  };
  // Make sure that user has a person
  if (!userObject.person) {
    userObject.person = dataObject.generatePerson();
  }

  // Show the people
  res.render("index", {
    status: userObject,
    colors: colorArray,
    classes: getClasses(userObject)
  });
});

app.post("/", (req, res) => {
  let currentCookie = getCookie(req, res);
  let person;
  if (anythingReally[currentCookie]) {
    person = anythingReally[currentCookie].person;
  }
  // parse post data
  let formStatus = {
    good: Boolean(Number(req.body.goodbad)),
    food: req.body.food,
    color: req.body.color,
    insanity: req.body.insanity,
    person: person
  };

  // set cookie
  anythingReally[currentCookie] = formStatus;
  res.redirect("back");
});

app.listen(port, () => {
  console.log("Serving!");
});

function getCookie(requestedFrom, responseFrom) {
  // console.log(anythingReally);
  let currentCookie = requestedFrom.cookies.uuid;
  if (!currentCookie) {
    currentCookie = uuid();
  }

  responseFrom.cookie("uuid", currentCookie);
  return currentCookie;
}

function getClasses(userObject) {
  let classes = {
    body: "insanity-low",
    html: userObject.color,
    columns: +userObject.insanity + 1,
    food: userObject.food
  };

  return classes;
}

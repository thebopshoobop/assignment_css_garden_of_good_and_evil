let express = require("express");
let exphbs = require("express-handlebars");
let app = express();

const port = process.env.PORT || "3000";

// parsers
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

// Templates!
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// POST middleware
app.use(bodyParser.urlencoded({ extended: true }));
// Cookie middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  // get status from cookie if it's set or use defaults
  let theCookie = false;
  let formStatus = theCookie || {
    good: true,
    food: "",
    color: "",
    insanity: 0
  };
  res.render("index", { status: formStatus });
});

app.post("/", (req, res) => {
  // parse post data
  let formStatus = {
    good: Boolean(req.body.goodbad),
    food: req.body.food,
    color: req.body.color,
    insanity: req.body.insanity
  };
  console.log(formStatus);
  // set cookie
  res.redirect("back");
});

app.listen(port, () => {
  console.log("Serving!");
});

// Widget List
// * Radio: good/evil
// * Text: favorite food
// * Dropdown: favorite color
// * Range Slider: insanity level

const express = require("express");
const app = express();
const fs = require("fs");

//app.set("view engine", "hbs");

const port = process.env.PORT || "3000";

app.get("/", (req, res) => {
  console.log("just a normal get");
  //res.render("hbsTemplate", variablereplace);
  res.end;
});

app.listen(port);

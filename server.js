const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
const mongodbconnect = require("./db");
const bodyParser = require("body-parser");
const app = express();
const bookroutes = require("./controllers/book.controllers");
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Routing

app.use("/books", bookroutes);

// View Engine
app.set("views", path.join(__dirname, "views"));
app.engine( 
  ".hbs",
  engine({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views/layouts"),
    defaultLayout: "mainLayout.hbs",
  })
);
app.set("view engine", ".hbs");
 
mongodbconnect()
  .then((d) => {
    console.log("Connection Successfuly");
  })
  .catch((err) => {
    console.log(err);
  });
app
  .listen(port, () => console.log(`Example app listening on port ${port}!`))
  .on("error", (err) => console.log("Failed Connection!!"));

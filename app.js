const express = require("express");
const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: false }));
// using bodyparser to extrate data that in the request body

app.use((req, res, next) => {
  console.log("1 st middleware");
  next(); // this allow to request to next middleware
});
app.use((req, res, next) => {
  console.log("2nd middleware");
});

const port = 8080 || process.env.port;

app.listen(port, () => {
  console.log(`App listening on port $(port)!`);
});

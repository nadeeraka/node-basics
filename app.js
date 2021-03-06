const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyparser.urlencoded({ extended: false }));
// using bodyparser to extrate data that in the request body
app.use("/admin", adminRoutes);
// place the custom routes
app.use(shopRoutes.routes);
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  //res.sendFile(path.join(__dirname, "views", "404.html"));
  res.render("404", { title: "404" });
});

const port = 8080 || process.env.port;

app.listen(port, () => {
  console.log(`App listening on port $(port)!`);
});

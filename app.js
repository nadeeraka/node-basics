const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");

app.use(bodyparser.urlencoded({ extended: false }));
// using bodyparser to extrate data that in the request body
app.use("/admin", adminRoutes);
// place the custom routes
app.use(shopRoutes);
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

const port = 8080 || process.env.port;

app.listen(port, () => {
  console.log(`App listening on port $(port)!`);
});

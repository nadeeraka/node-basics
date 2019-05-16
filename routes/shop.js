const express = require("express");
const path = require("path");
const router = express();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});
router.get("/shop", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});
router.get("/add-product", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/shop");
});

module.exports = router;

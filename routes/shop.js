const express = require("express");
const path = require("path");
const router = express();

const products = [];

router.get("/", (req, res) => {
  console.log(products);
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});
router.get("/shop", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});
router.get("/add-product", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

router.post("/add-product", (req, res) => {
  products.push({ title: req.body.title });
  res.redirect("/shop");
});

exports.routes = router;
exports.products = products;

const express = require("express");
const router = express.Router();

const locals = {
  title: "Nodejs Blog",
  description: "Blog application using Nodejs, Express and MongoDB",
};

router.get("", function (req, res) {
  res.render("index", { locals });
});

router.get("/about", function (req, res) {
  res.render("about", { locals });
});

router.get("/contact", function (req, res) {
  res.render("contact", { locals });
});

module.exports = router;

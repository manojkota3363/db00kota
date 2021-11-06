var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("valley", { title: "Search Results valley" });
});

module.exports = router;
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("valley", { title: "Search Results valley" });
});
// for a specific Costume. 
exports.valley_detail = async function(req, res) { 
  console.log("detail"  + req.params.id) 
  try { 
      result = await valley.findById( req.params.id) 
      res.send(result) 
  } catch (error) { 
      res.status(500) 
      res.send(`{"error": document for id ${req.params.id} not found`); 
  } 
}; 

module.exports = router;

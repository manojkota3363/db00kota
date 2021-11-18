var express = require("express");
const valley_controlers=require('../controllers/valley')
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("valley", { title: "Search Results valley" });
});
module.exports = router;
//GET detail valley page */ 
router.get('/detail',valley_controlers.valley_view_one_Page);
/* GET create valley page */ 
router.get('/create', valley_controlers.valley_create_Page); 
module.exports = router;
/* GET create update page */ 
router.get('/update', valley_controlers.valley_update_Page); 
/* GET create valley page */ 
router.get('/delete', valley_controlers.valley_delete_Page); 
 

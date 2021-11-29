var express = require("express");
const valley_controlers=require('../controllers/valley')
var router = express.Router();

/* GET mattress */ 
router.get('/', valley_controlers.valley_view_all_Page );
module.exports = router;

// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

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
router.get('/update',secured, valley_controlers.valley_update_Page); 
/* GET create valley page */ 
router.get('/delete', valley_controlers.valley_delete_Page); 
 

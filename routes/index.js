var express = require('express');
var router = express.Router();
var items = ["Cooking"];
/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index',{newListItems : items});
  
});
router.post('/',function(req, res, next){
item = req.body.newitem;
items.push(item);
res.redirect('/');
console.log(item);
})
module.exports = router;

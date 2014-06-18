var store = require('../store');  // connect controller to data store
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var tweets = store.list();
  res.render('index', { title: 'Twitter.js', tweets: tweets });
});
// this change is fake
module.exports = router;

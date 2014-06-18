var store = require('../store');  // connect controller to data store
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var tweets = store.list();
  res.render('index', { title: 'Twitter.js', tweets: tweets, show_form: true });
});
// this change is fake
module.exports = router;

// route for submit form to work
router.post('/submit', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  var id = store.sizeOf();

  store.push(name, text, id); // does this function need id argument?
  io.sockets.emit("new_tweet", { });
  res.redirect('/');
});


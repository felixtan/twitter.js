var express = require('express');
var router = express.Router();
var store = require("../store");
var io = require('socket.io');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

// this is a route

router.get('/:name/tweets/:id', function(req, res) {
  var name = req.params.name;
  var id = req.params.id;
  var list = store.find({name: name, id: id});

  res.render('index', { title: 'Twitter.js - Posts by '+name, list: list, show_form: false
  });

  //io.sockets.emit("new_tweet", { });
});

module.exports = router;


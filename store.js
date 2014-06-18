// data-store file

var underscore = require("underscore");

// called immediately after it's defined because of the (); at the end
// returns an object of functions push, list, and store
var store = function () {
  var data = [];

  return {
    push: function(name, text) {
      data.push({
        "name": name,
        "text": text
      })
    },
    list: function() {
       return data;
    },
    find: function(properties) {
      return underscore.where(data, properties);
    }
  };
}();

// exposes store function to the rest of the application
module.exports = store;



// test tweets
var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Will', 'Charlotte', 'Jacob','Ethan','Sophia','Emma','Madison'];
  var fakeLasts = ["Alley", 'Stacky', 'Fullstackerson', 'Nerd', 'Ashby', 'Gatsby', 'Hazelnut', 'Cookie', 'Tilde', 'Dash'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for(var i=0; i<10; i++) {
  store.push(getFakeName(), getFakeTweet());
}
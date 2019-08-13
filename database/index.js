var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://roman:roman1@ds263107.mlab.com:63107/teamstats', function(err){
  if(err) console.log(err);
  console.log("connection successful");
});

module.exports = db;
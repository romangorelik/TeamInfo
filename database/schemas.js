let mongoose = require('mongoose');
let db = require('./index.js');

let userSchema = mongoose.Schema({
  email: {type: String, unique: true}, 
  favorites: [{type: String, unique: true}]
})

let Users = mongoose.model('Users', userSchema)

module.exports = {'Users': Users}
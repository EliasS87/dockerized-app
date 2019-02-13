var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
    name: String,
    age: Number
  });
var person = mongoose.model('person', personSchema);

module.exports = person;
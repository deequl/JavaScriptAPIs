//Connect mongoose
var mongoose = require('mongoose');
mongoose.set('debug', true); //debug mode to true
mongoose.connect('mongodb://localhost/todo-api'); //todo-api is the name for the database

mongoose.Promise = Promise; //allows us to use promises

module.exports.Todo = require("./Todo");
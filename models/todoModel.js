/**
 * Created by Jarir on 2016.10.3.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    username : String,
    todo : String,
    isDone : Boolean,
    hasAttachment: Boolean
});

var Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;

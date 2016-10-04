/**
 * Created by Jarir on 2016.10.3.
 */
var Todos = require('../models/todoModel');

module.exports = function (app) {
    app.get('/api/setupTodos', function (req, res) {
        //seed data
        var starterTodos = [
            {
                username : 'test',
                todo : 'Buy milk',
                isDone : false,
                hasAttachment: false
            },
            {
                username : 'test1',
                todo : 'feed cat',
                isDone : false,
                hasAttachment: false
            },
            {
                username : 'test',
                todo : 'feed cat',
                isDone : false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, function (err, results) {
            res.send(results);
        });
    });
};

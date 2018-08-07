var express = require('express');
var router = express.Router();
var db = require("../models")

var helpers = require('../helpers/todosHelpers')

router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo)

router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)

/*
router.get('/', helpers.getTodos);
router.post('/', helpers.createTodo);
router.get('/:todoId', helpers.getTodo);
router.put('/:todoId', helpers.updateTodo);
router.delete('/:todoId', helpers.deleteTodo);
*/

module.exports = router;
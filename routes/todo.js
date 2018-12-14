const express = require('express');
const router = express.Router();
const todoCtrl = require('../controllers/todoController');

router.get('/', todoCtrl.getAllTodos);

router.post('/', todoCtrl.addTodo);

router.put('/:todo', todoCtrl.updateTodo);

router.delete('/:todo', todoCtrl.removeTodo);

module.exports = router;
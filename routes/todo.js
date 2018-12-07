const express = require('express');
const router = express.Router();
const data = require('../controllers/todoController');

// Todo routes
router.get('/', (req, res) => {
    res.render('todos', { 'data': data });
});

router.post('/new', (req, res) => {
    data.addTodo(req.body.todo);
    res.render('todos', { 'data': data });
});

router.delete('/delete/:todo', (req, res) => {
    data.removeTodo(req.params.todo);
    res.render('todos', { 'data': data });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const data = require('../controllers/todoController');

// Todo routes
router.get('/', (req, res) => {
    res.render('todos', { 'data': data });
});

router.post('/', (req, res) => {
    data.addTodo(req.body.todo);
    res.render('todos', { 'data': data });
});

router.delete('/:todo', (req, res) => {
    console.log('delete route hit');
    data.removeTodo(req.params.todo);
    res.send({'idk':'idk'});
});

module.exports = router;
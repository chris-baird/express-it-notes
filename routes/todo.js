const express = require('express');
const router = express.Router();
const todoCtrl = require('../controllers/todoController');

router.get('/', todoCtrl.getAllTodos);

// Todo routes
// router.get('/', (req, res) => {
//     res.render('todos', { 'data': data });
// });

router.post('/', (req, res) => {
    data.addTodo(req.body.todo);
    res.redirect('/todos');
});

router.delete('/:todo', (req, res) => {
    console.log('delete route hit');
    data.removeTodo(req.params.todo);
    res.render('todos', { 'data': data });
});

router.put('/:todo', (req, res) => {
    console.log('Update route has been hit');
    console.log(req.body.data);
    data.updateTodo(req.params.todo, req.body.data);
    res.render('todos', { 'data': data });
})

module.exports = router;
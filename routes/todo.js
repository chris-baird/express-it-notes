const express = require('express');
const router = express.Router();
const data = require('../controllers/todoController');

// Todo routes
router.get('/', (req, res) => {
    console.log('todo routes hit');
    res.render('todos', { 'data': data });
})

router.post('/new', (req, res) => {
    console.log(req.body);
})

module.exports = router;
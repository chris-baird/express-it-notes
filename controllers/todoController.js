const data = {
    appName: 'Express it todos',
    todos: ['Do something', 'Do something Pt 2'],
    addTodo: function(todo){
        this.todos.push(todo);
    },
    removeTodo: function(todo){
        this.todos.forEach((currentTodo,index) => {
            if(currentTodo === todo){
                console.log('delete hit');
                this.todos.splice(index,1);
            }
        });
    }
}

module.exports = data;
var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My todos', this.todos);
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todo[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodos: function(position) {
    this.todo.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};

import React from 'react';
import TodoList from './Todo/TodoList'

function App() {

    let [todos, setTodos] = React.useState([
      {id: 1, completed: false, title: 'learn react documentation'},
      {id: 2, completed: false, title: 'learn sass'},
      {id: 3, completed: false, title: 'do todo app'},
    ])

   function toggleTodo(id){
      setTodos(
        todos = todos.map(todo =>{
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
        })
      )
   }

  return (
    <div className="wrapper">
      <TodoList todos = {todos}
                onToggle={toggleTodo}/>
    </div>
  );
}

export default App;

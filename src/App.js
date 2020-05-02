import React, {useEffect} from 'react';
import TodoList from './Todo/TodoList'
import Context from './context'
import Header from './Header'
import Loader from './Loader'


const AddTodo = React.lazy(()=> import('./AddTodo'))
//For cheching lazy loading component

// const AddTodo = React.lazy(()=> new Promise(resolve=>{
//   setTimeout(()=>{
//     resolve(import('./AddTodo'))
//   },3000)
// }))

function App() {


    let [todos, setTodos] = React.useState([])
    const [loading, setLoading] = React.useState(true)


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

   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => response.json())
    .then(todos => {
        setTimeout(() => { // setTimeout for checking loading
          setTodos(todos)
          setLoading(false)
        }, 1000)
      })
   }, [])

  function removeTodo(id){
    setTodos(
      todos.filter(todo => todo.id!==id)
    )
  }

  function addTodo(title){
    setTodos(todos.concat([
    {
      title,
      id: Date.now(),
      completed: false
    }
    ]))
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className="wrapper">
        <Header />
        <React.Suspense fallback={<Loader/>}>
          <AddTodo onCreate={addTodo}/>
        </React.Suspense>
        {loading && <Loader/>}
        {todos.length ? 
            <TodoList todos = {todos} onToggle={toggleTodo}/> 
            : loading? null: <p>No todos!</p>}
        
      </div>
    </Context.Provider>
  );
}

export default App;

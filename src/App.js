import React, {useState} from "react";
import Todo from "./Components/Todo";
import './styles/App.css';
function App() {
  const [todoData, setTodoData] = useState([
    {id:1, completed:false, description:"Test1"},
    {id:2, completed:true, description:"Test2"},
    {id:3, completed:false, description:"Test3"}
  ])
  function toggleTodo(id) {
    setTodoData(
    todoData = todoData.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    )
  }

  return (
    <div className="App">
      <h1>Todo List</h1>

      <Todo todo={todoData} onToggle={toggleTodo} />
    </div>
  );
}

export default App;

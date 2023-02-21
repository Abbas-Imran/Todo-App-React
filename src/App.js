import { useState } from "react";
import AddNewTodo from "./components/addNewTodo";
import Todo from "./components/Todo";

function App() {
  const [todos, setNewTodos] = useState([]);

  function addNewTodo(todoText) {
    setNewTodos([...todos, todoText]);
  }
  console.log("In App.js", todos);

  function deleteTodo(text) {
    console.log(`deleting ${text} in app.js`)
    const filteredArray = todos.filter((obj) => obj.todo !== text);
    console.log("Filtered Array" , filteredArray);
    setNewTodos(filteredArray);
  }

  let num = 0;
  return (
    <div>
      <div className="header">
        <h1>My Todos</h1>
        <AddNewTodo AddNewTodo={addNewTodo} />
      </div>
      <div className="allTodos">
        {/* <Todo text="Learn React"  deleteTodo= {deleteTodo}/>
        <Todo text="Master React" deleteTodo= {deleteTodo}/>
        <Todo text="React" deleteTodo= {deleteTodo}/> */}
        {todos.map((todoText) => (
          <Todo
            text={todoText.todo}
            deleteTodo={deleteTodo}
            key={todoText.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";

function AddNewTodo(props) {
  const [text, setText] = useState();
  const [id, setId] = useState(0);
  const AddTodoHandler = () => {
    if (text) {
      const NewTodo = {
        todo: text,
        id: id,
      }
      props.AddNewTodo(NewTodo);
      setId(id+1);
      console.log("new Todo" , NewTodo);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add new Todo's"
        className="addNewTodo"
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn" onClick={AddTodoHandler}>
        Add
      </button>
    </div>
  );
}

export default AddNewTodo;

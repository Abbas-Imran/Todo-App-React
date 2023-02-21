import { useState } from "react";
import Backdrop from "./Backdrop";
import Model from "./Model";

function Todo(props) {
  const [modelIsOpen, setModelIsOpen] = useState(false);
  // const [deleteTodo , setdeleteTodo] = useState(0);

  function deleteHander() {
    setModelIsOpen(true);
  } 

  function closeModelHandler() {
    setModelIsOpen(false);
  }
  function DeleteTodoHandler() {
    setModelIsOpen(false);
    console.log(`deleting ${props.text} in Todo.js`)
    props.deleteTodo(props.text);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHander}>
          Delete
        </button>
      </div>
      {modelIsOpen && <Model onCancel={closeModelHandler} onConfirm = {DeleteTodoHandler}/>}
      {modelIsOpen && <Backdrop  onCancel={closeModelHandler}/>}
    </div>
  )
}

export default Todo;
import React from "react";

export default function Todoitem({ todo, setTodos, setid, todos, setInput }) {
  function handledelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function handleedit(id) {
    setInput(todos.find((todo) => todo.id === id).name);
    setid(id);
  }
  return (
    <div>
      <h3>
        {todo.name}
        <button onClick={() => handleedit(todo.id)}>Edit</button>
        <button onClick={() => handledelete(todo.id)}>Delete</button>
      </h3>
    </div>
  );
}

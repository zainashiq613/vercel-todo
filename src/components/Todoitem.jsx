import React from "react";
import styles from "./Todoitem.module.css";

export default function Todoitem({ todo, setTodos, setid, todos, setInput }) {
  function handledelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function handleedit(id) {
    setInput(todos.find((todo) => todo.id === id).name);
    setid(id);
  }
  return (
    <div className={styles.todoitem}>
      <h3>{todo.name}</h3>
      <div className={styles.buttons}>
        <button onClick={() => handleedit(todo.id)}>Edit</button>
        <button onClick={() => handledelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
}

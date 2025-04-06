import Todoitem from "./Todoitem";
import React from "react";
import styles from "./Todolist.module.css";

export default function Todolist({ todos, setTodos, setid, setInput }) {
  return (
    <div className={styles.todolist}>
      {todos.map((todo) => (
        <Todoitem
          key={todo.id}
          todo={todo}
          todos={todos}
          setInput={setInput}
          setid={setid}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}

import Todoitem from "./Todoitem";
import React from "react";

export default function Todolist({ todos, setTodos, setid, setInput }) {
  return (
    <div>
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

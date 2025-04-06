import { useState } from "react";
import Form from "./Form";

import Todolist from "./Todolist";
export default function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [id, setid] = useState(0);

  return (
    <div>
      <Form
        id={id}
        todos={todos}
        setTodos={setTodos}
        setid={setid}
        input={input}
        setInput={setInput}
      />
      <Todolist
        todos={todos}
        setTodos={setTodos}
        setid={setid}
        setInput={setInput}
      />
    </div>
  );
}

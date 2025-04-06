import React from "react";

export default function Form({ id, todos, setTodos, setid, input, setInput }) {
  function handlesubmit(e) {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a todo item");
      return;
    }
    if (id) {
      const updatetodo = todos.map((todo) =>
        todo.id === id ? { ...todo, name: input } : todo
      );
      setTodos(updatetodo);
      setid(0);
      setInput("");
      return;
    }

    if (input !== "") {
      setTodos([{ id: `${input}-${Date.now()}`, name: input }, ...todos]);
    }
    setInput("");
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input onChange={(e) => setInput(e.target.value)} value={input}></input>
        <button type="submit">{id ? "Edit" : "Add"}</button>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo, clearTodos } from "./todoSlice";

const TodoList = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto", textAlign: "center" }}>
      <h2>📝 Todo List</h2>
      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
        <input
          type="text"
          value={text}
          placeholder="Enter todo..."
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
        <button onClick={() => dispatch(clearTodos())}>Clear All</button>
      </div>

      <ul style={{ marginTop: "1rem", listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.5rem",
              padding: "0.5rem",
              border: "1px solid #ddd",
              borderRadius: "6px",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            <span onClick={() => dispatch(toggleTodo(todo.id))} style={{ cursor: "pointer" }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

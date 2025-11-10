"use client";
import React from "react";
import { useTodoContext } from "../TodoContext";

export default function TodoList() {
  const { state, dispatch } = useTodoContext();

  if (state.todos.length === 0) {
    return <p className="mt-4 text-gray-500">まだTODOがありません。</p>;
  }

  return (
    <ul className="mt-4 space-y-2">
      {state.todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center border-b pb-2"
        >
          <span
            onClick={() =>
              dispatch({ type: "TOGGLE_TODO", payload: todo.id })
            }
            className={`cursor-pointer ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.text}
          </span>
          <button
            onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
            className="text-red-500"
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}

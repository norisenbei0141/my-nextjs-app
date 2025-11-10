"use client";
import React, { useState } from "react";
import { useTodoContext } from "../TodoContext";

export default function TodoInput() {
  const [text, setText] = useState("");
  const { dispatch } = useTodoContext();

  const handleAdd = () => {
    if (text.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  };

  return (
    <div className="flex gap-2 mt-4">
      <input
        type="text"
        className="border p-2 flex-1 rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="TODOを入力..."
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 rounded"
      >
        追加
      </button>
    </div>
  );
}

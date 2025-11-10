"use client";
import React, { useState, useEffect } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoDragDrop() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [dragStartIndex, setDragStartIndex] = useState<number | null>(null);

  // 初回読み込み
  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  // 保存
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // TODO追加
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  // 完了切替
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // 削除
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // ドラッグ開始
  const handleDragStart = (index: number) => {
    setDragStartIndex(index);
  };

  // ドラッグオーバー
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // デフォルト禁止で drop を許可
  };

  // ドロップ
  const handleDrop = (index: number) => {
    if (dragStartIndex === null) return;

    const newTodos = [...todos];
    const [movedItem] = newTodos.splice(dragStartIndex, 1); // 元の位置から削除
    newTodos.splice(index, 0, movedItem); // 新しい位置に挿入
    setTodos(newTodos);
    setDragStartIndex(null);
  };

  return (
    <main className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">TODO ドラッグ＆ドロップ</h1>

      {/* TODO追加 */}
      <form onSubmit={handleAdd} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="TODOを入力"
          className="border rounded p-2 flex-1"
        />
        <button type="submit" className="bg-green-500 text-white px-4 rounded">
          追加
        </button>
      </form>

      {/* TODOリスト */}
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            className="flex justify-between items-center border p-2 rounded cursor-move bg-gray-100"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className={todo.completed ? "line-through text-gray-400" : ""}>
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}





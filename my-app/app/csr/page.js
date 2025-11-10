'use client';

import { useEffect, useState } from "react";

export default function CSRPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return <p>⏳ データを取得中...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1> CSRレンダリング</h1>
      <p>データ: {data.message}</p>
      <p>取得時刻: {data.time}</p>
    </div>
  ); 
}
























'use client';

import { useEffect, useState } from "react";

export default function ClientFetcher() {
  const [data, setData] = useState(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // わざと存在しないURLにアクセスしてエラーを発生させる
        const res = await fetch("/api/does-not-exist");
        if (!res.ok) throw new Error("データ取得に失敗しました");
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err as Error);
        throw err; // ← ★ App Router にエラーを伝える！
      }
    }
    fetchData();
  }, []);

  if (data) return <p>データ: {JSON.stringify(data)}</p>;
  if (error) return <p>フェッチ中にエラーが発生しました。</p>;

  return <p>読み込み中...</p>;
}

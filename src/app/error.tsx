// src/app/error.tsx
"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <html>
      <body className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-red-600 mb-4">500 - サーバーエラー</h1>
        <p className="mb-6 text-gray-700">
          申し訳ありません。問題が発生しました。
        </p>
        <button
          onClick={() => reset()} // ページをリトライ
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          もう一度試す
        </button>
      </body>
    </html>
  );
}

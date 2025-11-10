'use client';

export default function Error({ error, reset }) {
  return (
    <div style={{ color: "red", padding: "2rem" }}>
      <h2>❌ エラーが発生しました！</h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()} // ← 再試行ボタン
        style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
      >
        再読み込み
      </button>
    </div>
  );
}

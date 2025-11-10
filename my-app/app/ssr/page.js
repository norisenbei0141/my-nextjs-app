// SSRはデフォルトでサーバーコンポーネントとして動作
export default async function SSRPage() {
    const res = await fetch("http://localhost:3000/api/data", { cache: "no-store" });
    const data = await res.json();
  
    return (
      <div style={{ padding: "2rem" }}>
        <h1>SSRレンダリング</h1>
        <p>データ: {data.message}</p>
        <p>取得時刻: {data.time}</p>
      </div>
    );
  }
  
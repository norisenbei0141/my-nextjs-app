export default function ServerPage() {
    // SECRET_KEY はサーバー専用
    const secret = process.env.SECRET_KEY;
  
    return <div>サーバー専用キー: {secret}</div>;
  }
  
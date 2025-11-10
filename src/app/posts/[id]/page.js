// /app/posts/[id]/page.js
import React from "react";

// ダミーデータ用関数（本番はDBやAPIから取得）
async function getPostById(id) {
  const posts = [
    { id: "1", title: "Hello World", content: "This is the first post." },
    { id: "2", title: "Next.js SSR", content: "Server-side rendering example." },
  ];
  return posts.find(post => post.id === id);
}

// サーバーコンポーネント
export default async function PostPage({ params }) {
  const { id } = params; // URLから取得
  const post = await getPostById(id);

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

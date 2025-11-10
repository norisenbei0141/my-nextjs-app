import Link from "next/link";
import type { Metadata } from "next";

// ページメタデータ
export const metadata: Metadata = {
  title: "Blog (SSG + API Example)",
};

// Post 型定義
interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function BlogPage() {
  // APIルートからデータを取得（サーバーコンポーネントで実行）
  const posts: Post[] = await getPosts();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded">
            <Link
              href={`/blog/${post.id}`}
              className="text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// APIルートまたは外部APIからデータ取得
async function getPosts(): Promise<Post[]> {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "force-cache", // SSGとしてビルド時に静的生成
  });
  return res.json();
}


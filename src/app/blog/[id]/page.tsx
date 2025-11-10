import type { Metadata } from "next";

interface Post {
  id: number;
  title: string;
  body: string;
}

// ビルド時に全 id を取得して静的パスを生成
export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts: Post[] = await res.json();

  // 返すオブジェクトのキーは [id] に合わせる
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}


export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return { title: `Post ${params.id}` };
}

// 各記事ページ
export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post: Post = await res.json();

  return (
    <article className="p-6">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}

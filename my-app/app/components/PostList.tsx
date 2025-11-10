export default function PostList({ posts }: { posts: any[] }) {
    return (
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">SSRで取得した投稿</h2>
        <ul className="list-disc list-inside">
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
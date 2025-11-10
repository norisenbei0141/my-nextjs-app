'use client'
import { useState, useEffect } from 'react'

export default function LazyFetcher() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [loaded, setLoaded] = useState(false)

  // データを取得する関数
  const fetchData = async () => {
    setLoading(true)
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    const data = await res.json()
    setPosts(data)
    setLoading(false)
    setLoaded(true)
  }
  // useEffectで遅延実行
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData()
    }, 3000) // 3秒後にデータ取得
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">CSRでの遅延読み込み</h2>

      {!loaded && !loading && <p> データを読み込み中ではありません。</p>}
      {loading && <p>🔄 データを取得中...</p>}

      {loaded && (
        <ul className="list-disc list-inside mt-2">
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}

      <button
        onClick={fetchData}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
      </button>
    </div>
  )
}



'use client'

import { useState } from 'react'

export default function TextForm() {
  const [text, setText] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">テキスト入力フォーム</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="ここに入力..."
        className="border rounded p-2 w-full"
      />
      <p className="mt-3">入力内容: {text}</p>
    </div>
  )
}

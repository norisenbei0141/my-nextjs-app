"use client"; // ← クライアントコンポーネント化

import { useSearchParams } from "next/navigation";

export default function RouteInfoPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") ?? "未指定";

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Route Info</h1>
      <p>ID: {id}</p>
    </div>
  );
}

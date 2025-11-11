"use client"; // 追加

import { useSearchParams } from "next/navigation";

export default function RouteInfoPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <div>
      <h1>Route Info</h1>
      <p>ID: {id}</p>
    </div>
  );
}

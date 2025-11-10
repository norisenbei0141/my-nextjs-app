"use client";

export default function ClientPage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  return <div>APIのURL: {apiUrl}</div>;
}

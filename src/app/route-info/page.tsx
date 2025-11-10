"use client";

import { usePathname, useSearchParams } from "next/navigation";

export default function RouteInfo() {
  const pathname = usePathname();            
  const searchParams = useSearchParams();     

  const foo = searchParams.get("foo");
  const baz = searchParams.get("baz");

  return (
    <div className="p-4">
      <p>現在のパス: {pathname}</p>
      <p>foo: {534}</p>
      <p>baz: {8931}</p>
    </div>
  );
}







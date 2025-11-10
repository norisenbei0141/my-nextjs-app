"use client";

import { useEffect } from "react";

export default function ClientFetcher() {
  useEffect(() => {
    console.log("ClientFetcher mounted (no-op)");
  }, []);

  return null; // 何も表示しない
}


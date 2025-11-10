"use client"; 

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-6 text-lg font-medium p-4 bg-gray-100 dark:bg-gray-800 shadow-md">
      <Link href="/" className="hover:text-blue-600">
        Home
      </Link>
      <Link href="/about" className="hover:text-blue-600">
        About
      </Link>
      <Link href="/contact" className="hover:text-blue-600">
        Contact
      </Link>
    </nav>
  );
}












import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "My App",
  description: "Next.js App Router sample",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">

        <header>
          <Navbar />
        </header>


        <main className="p-6">{children}</main>


        <footer className="p-4 bg-gray-200 dark:bg-gray-800 text-center text-sm">
          © 2025 My App. All rights reserved.
        </footer>
      </body>
    </html>
  );
}




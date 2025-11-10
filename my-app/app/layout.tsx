import "./globals.css";
import { ThemeProvider } from "./ThemeContext";
import { TodoProvider } from "./TodoContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <ThemeProvider>
          <TodoProvider>{children}</TodoProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}



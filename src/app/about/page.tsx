import styles from "./page.module.css";
export const metadata = {
    title: "About | My App",
    description: "このサイトについて説明するページです。",
  };
 
export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Page</h1>
      <p className={styles.text}>このサイトについての説明ページです。</p>
    </div>
  );
}


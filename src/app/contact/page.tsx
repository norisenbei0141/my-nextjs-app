import styles from "./page.module.css";
export const metadata = {
    title: "Contact | My App",
    description: "お問い合わせページです。メールでご連絡ください。",
  };
  
export default function ContactPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Page</h1>
      <p className={styles.text}>
        お問い合わせは以下のメールアドレスへどうぞ。
      </p>
      <p className={styles.email}>info@example.com</p>
    </div>
  );
}

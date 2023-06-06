import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header>header</header>
      <div className={styles.center}>center</div>

      <footer>footer</footer>
    </main>
  );
}

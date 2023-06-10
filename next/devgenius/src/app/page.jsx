import Image from "next/image";
import styles from "./page.module.css";
import HeroImage from "public/hero.png";
import Button from "./components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Unlocking Limitless Possibilities</h1>
        <p className={styles.description}>
          We turn your ideas into reality with the magic of our awesome team.
        </p>
        <Button url="/portfolio" text="See Our Work" />
      </div>
      <div className={styles.item}>
        {/* if importing images as components, you don't have to specify width and height,
        otherwise you have to
      */}
        <Image src={HeroImage} alt="hero-image" className={styles.heroImg} />
      </div>
    </div>
  );
}

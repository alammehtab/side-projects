import Image from "next/image";
import styles from "./page.module.css";
import HeroImage from "public/hero.png";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* if importing images as components, you don't have to specify width and height,
        otherwise you have to
      */}
      <Image src={HeroImage} alt="hero-image" className={styles.heroImg} />
    </div>
  );
}

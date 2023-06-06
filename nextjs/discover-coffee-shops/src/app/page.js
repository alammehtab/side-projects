"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./components/Banner/banner";

export default function Home() {
  const handleOnBannerBtnClick = () => {
    alert("helllo from banner button");
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Coffee Connoisseur</h1>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
      </main>
    </div>
  );
}

import Button from "@/app/components/button/Button";
import styles from "./portCat.module.css";
import Image from "next/image";
const PortfolioCategory = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{params.category}</h1>

      {/* first item */}
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.itemTitle}>Lorem ipsum dolor sit amet</h1>
          <p className={styles.categoryDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            officia neque sint aliquid odit harum necessitatibus nulla ut eius
            maiores.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            numquam dolores corporis accusamus voluptatibus aspernatur molestias
            libero exercitationem voluptatum aliquam. Atque saepe temporibus
            corporis libero hic pariatur quisquam vitae et!
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="/apps.jpg"
            alt="appsCategory-image"
          />
        </div>
      </div>

      {/* second item */}
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.itemTitle}>Lorem ipsum dolor sit amet</h1>
          <p className={styles.categoryDesc}>
            <p className={styles.categoryDesc}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae officia neque sint aliquid odit harum necessitatibus
              nulla ut eius maiores.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              numquam dolores corporis accusamus voluptatibus aspernatur
              molestias libero exercitationem voluptatum aliquam. Atque saepe
              temporibus corporis libero hic pariatur quisquam vitae et!
            </p>
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="/apps.jpg"
            alt="appsCategory-image"
          />
        </div>
      </div>

      {/* third item */}
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.itemTitle}>Lorem ipsum dolor sit amet</h1>
          <p className={styles.categoryDesc}>
            <p className={styles.categoryDesc}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae officia neque sint aliquid odit harum necessitatibus
              nulla ut eius maiores.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              numquam dolores corporis accusamus voluptatibus aspernatur
              molestias libero exercitationem voluptatum aliquam. Atque saepe
              temporibus corporis libero hic pariatur quisquam vitae et!
            </p>
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="/apps.jpg"
            alt="appsCategory-image"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCategory;

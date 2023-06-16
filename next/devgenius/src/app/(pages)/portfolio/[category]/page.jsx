import Button from "@/app/components/button/Button";
import styles from "./portCat.module.css";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getGalleryItems = (category) => {
  const data = items[category];

  if (data) {
    return data;
  }

  return notFound();
};
const PortfolioCategory = ({ params }) => {
  const galleryItems = getGalleryItems(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{params.category}</h1>

      {galleryItems.map((item) => {
        return (
          <div className={styles.item} key={item.id}>
            <div className={styles.content}>
              <h1 className={styles.itemTitle}>{item.title}</h1>
              <p className={styles.categoryDesc}>{item.desc}</p>
              <Button text="See More" url="#" />
            </div>
            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                fill={true}
                src={item.image}
                alt="appsCategory-image"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioCategory;

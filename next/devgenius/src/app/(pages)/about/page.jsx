import Image from "next/image";
import styles from "./about.module.css";
import Button from "../../components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/apps.jpg" fill={true} alt="" className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Ideas Transformers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning software experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quasi
            nulla corporis necessitatibus beatae magni enim molestiae,
            obcaecati, labore sunt in voluptate vel rerum fugiat consequatur
            ipsa modi ea veniam!Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
            <br />
            <br />
            Sint quasi nulla corporis necessitatibus beatae magni enim
            molestiae, obcaecati, labore sunt in voluptate vel rerum fugiat
            consequatur ipsa modi ea veniam!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sint quasi nulla corporis
            necessitatibus beatae magni enim molestiae, obcaecati, labore sunt
            in voluptate vel rerum fugiat consequatur ipsa modi ea veniam! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sint quasi nulla
            corporis necessitatibus beatae magni enim molestiae, obcaecati,
            labore sunt in voluptate vel rerum fugiat consequatur ipsa modi ea
            veniam!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, nobis
            natus ipsum numquam provident asperiores fugiat doloribus facere
            esse. Fugiat commodi velit esse temporibus, sapiente laudantium
            facilis culpa vitae nesciunt?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            ipsum quam veniam pariatur aperiam distinctio ullam, voluptas, omnis
            atque qui libero consectetur modi. Voluptatum laboriosam nisi
            voluptatibus laborum similique error.
            <br />
            <br /> - Creative Illustrations
            <br />
            <br /> - Dynamic Websties
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;

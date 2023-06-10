import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>© DevGenius. All rights reserved.</div>
      <div className={styles.socialAppsLogos}>
        {/* an alternate method of giving styling/handling images, for explicitly giving 
          width and height
        <div className={styles.imgContainer}>
        </div>
      */}
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={styles.socialAppLogo}
          alt="facebook logo"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.socialAppLogo}
          alt="instagram logo"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.socialAppLogo}
          alt="twitter logo"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={styles.socialAppLogo}
          alt="youtube logo"
        />
      </div>
    </div>
  );
};

export default Footer;

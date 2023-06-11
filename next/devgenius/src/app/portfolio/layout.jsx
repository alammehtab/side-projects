import styles from "./portfolio.module.css";

const PortfolioLayout = ({ children }) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Work</h1>
      {children}
    </div>
  );
};

export default PortfolioLayout;

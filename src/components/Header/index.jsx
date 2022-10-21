import styles from "./Header.module.scss";
import heartSVG from "../../assets/img/heart.svg";
import cartSVG from "../../assets/img/cart.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <span className={styles.logo}>QPICK</span>
      <div className={styles.actions}>
        <div className={styles.button}>
          <img src={heartSVG} alt="best" />
          <div className={styles.count}>2</div>
        </div>
        <div className={styles.button}>
          <img src={cartSVG} alt="cart" />
          <div className={styles.count}>1</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

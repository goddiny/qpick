import styles from "./Header.module.scss";
import heartSVG from "../../assets/svg/heart.svg";
import cartSVG from "../../assets/svg/cart.svg";
import { useContext } from "react";
import ItemContext from "../ItemContext";

const Header = () => {
	
  const { cartItems, setCartItems } = useContext(ItemContext);

  return (
    <div className={styles.header}>
      <span className={styles.logo}>QPICK</span>
      <div className={styles.actions}>
        <div className={styles.button}>
          <img src={heartSVG} alt="best" />
          <div className={styles.count}>&#215;</div>
        </div>
        <div className={styles.button}>
          <img src={cartSVG} alt="cart" />
          <div className={styles.count}>{Object.keys(cartItems).length}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

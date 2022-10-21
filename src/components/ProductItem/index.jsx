import styles from "./ProductItem.module.scss";
import blankimg from '../../assets/img/S852.png';


const ProductItem = ({ img, title, price, rate, category }) => {
  return (
    <div className={styles.item}>
      <img src={blankimg} alt="" />
	  <p>{title}</p>
    </div>
  );
};

export default ProductItem;

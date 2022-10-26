import styles from "./ProductItem.module.scss";
import starSVG from "../../assets/svg/star.svg";

const ProductItem = ({ product, onAddCartItem }) => {
  return (
    <div className={styles.item}>
      <div className={styles.picture_container}>
        <img
          className={styles.item_picture}
          src={product.img}
          alt="image lost"
        />
      </div>

      <div className={styles.description_container}>
        <h3 className={styles.title}>{product.title}</h3>
        <span className={styles.price}>{product.price} &#x20bd;</span>
        <div className={styles.rating_container}>
          <img className={styles.rating_img} src={starSVG} alt="star here" />
          <span className={styles.rating}>{product.rate}</span>
        </div>
        <button
          className={styles.button}
          onClick={() => onAddCartItem(product)}
        >
          Купить
        </button>
      </div>
    </div>
  );
};

export default ProductItem;

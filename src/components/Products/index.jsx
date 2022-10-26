import styles from "./Products.module.scss";
import ProductItem from "../ProductItem";
import { useContext } from "react";
import ItemContext from "../ItemContext";

const Products = ({ title, category, products }) => {
  const { cartItems, setCartItems } = useContext(ItemContext);

  const onAddCartItem = (product) => {
    product.id in cartItems
      ? (cartItems[product.id] += 1)
      : (cartItems[product.id] = 1);

    console.log(
      Object.values(cartItems).reduce((sum, elem) => {
        return sum + elem;
      }, 0)
    );
    setCartItems(cartItems);
  };

  return (
    <>
      <p className={styles.title}>{title}</p>
      <div className={styles.products}>
        {products
          .filter((product) => {
            if (product.category === category) {
              return true;
            } else return false;
          })
          .map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onAddCartItem={onAddCartItem}
            />
          ))}
      </div>
    </>
  );
};

export default Products;

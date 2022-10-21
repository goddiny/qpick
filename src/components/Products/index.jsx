import styles from "./Products.module.scss";
import ProductItem from "../ProductItem";

const Products = ({ title, category, products }) => {
  console.log(title);
  console.log(category);
  console.log(products);
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
              img={product.img}
              title={product.title}
              price={product.price}
              rate={product.rate}
            />
          ))}
      </div>
    </>
  );
};

export default Products;

import Products from "../components/Products";

const ProductsPage = ({ categories, products }) => {
  return (
    <div>
      {categories.map((category) => (
        <Products
          title={category.title}
          category={category.index}
          products={products}
          key={category.index}
        />
      ))}
    </div>
  );
};

export default ProductsPage;

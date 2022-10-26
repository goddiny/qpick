import Header from "./components/Header";
import ProductsPage from "./pages/ProductsPage";
import Footer from "./components/Footer";
import styles from "./App.module.scss";
import Cart from "./components/Cart";
import ItemContext from "./components/ItemContext";
import { useState } from "react";

const App = () => {
  const INITIAL_CATEGORIES = [
    { title: "Наушники", index: 0 },
    { title: "Беспроводные наушники", index: 1 },
  ];

  const INITIAL_PRODUCTS = [
    {
      id: 0,
      img: "./assets/S852.png",
      title: "Apple BYZ S852I",
      price: 2927,
      rate: 4.7,
      category: 0,
    },
    {
      id: 1,
      img: "./assets/earpods.png",
      title: "Apple EarPods",
      price: 2327,
      rate: 4.5,
      category: 0,
    },
    {
      id: 2,
      img: "./assets/earpodsincase.png",
      title: "Apple EarPods",
      price: 2327,
      rate: 4.5,
      category: 0,
    },
    {
      id: 3,
      img: "./assets/S852.png",
      title: "Apple BYZ S852I",
      price: 2927,
      rate: 4.7,
      category: 0,
    },
    {
      id: 4,
      img: "./assets/earpods.png",
      title: "Apple EarPods",
      price: 2327,
      rate: 4.5,
      category: 0,
    },
    {
      id: 5,
      img: "./assets/earpodsincase.png",
      title: "Apple EarPods",
      price: 2327,
      rate: 4.5,
      category: 0,
    },
    {
      id: 6,
      img: "./assets/airpods.png",
      title: "Apple AirPods",
      price: 9527,
      rate: 4.7,
      category: 1,
    },
    {
      id: 7,
      img: "./assets/airpodspro.png",
      title: "GERLAX GH-04",
      price: 6527,
      rate: 4.7,
      category: 1,
    },
    {
      id: 8,
      img: "./assets/borofone.png",
      title: "BOROFONE BO4",
      price: 7527,
      rate: 4.7,
      category: 1,
    },
  ];

  const [cartItems, setCartItems] = useState({});

  return (
    <ItemContext.Provider value={{ cartItems, setCartItems }}>
      <div className={styles.app}>
        <div className={styles.container}>
          <div>
            <Header />
            <ProductsPage
              categories={INITIAL_CATEGORIES}
              products={INITIAL_PRODUCTS}
            />
            <Cart/>
          </div>
          <Footer />
        </div>
      </div>
    </ItemContext.Provider>
  );
};

export default App;

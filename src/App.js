import Header from "./components/Header";
import ProductsPage from "./pages/ProductsPage";

import styles from "./App.module.scss";

const App = () => {
  const INITIAL_CATEGORIES = [
    { title: "Наушники", index: 0 },
    { title: "Беспроводные наушники", index: 1 },
  ];

  const INITIAL_PRODUCTS = [
    {
      img: "../../assets/img/S852.png",
      title: "Apple BYZ S852I",
      price: 2927,
      rate: 4.7,
      category: 0,
    },
    {
      img: "../../assets/img/earpods.png",
      title: "Apple EarPods",
      price: 2327,
      rate: 4.5,
      category: 0,
    },
    {
      img: "../../assets/img/earpodsincase.png",
      title: "Apple EarPods",
      price: 2327,
      rate: 4.5,
      category: 0,
    },
    {
      img: "../../assets/img/S852.png",
      title: "Apple BYZ S852I",
      price: 2927,
      rate: 4.7,
      category: 0,
    },
    {
      img: "../../assets/img/earpods.png",
      title: "Apple EarPods",
      price: 2327,
      rate: 4.5,
      category: 0,
    },
    {
      img: "../../assets/img/earpodsincase.png",
      title: "Apple EarPods",
      price: 2327,
      rate: 4.5,
      category: 0,
    },
    {
      img: "../../assets/img/airpods.png",
      title: "Apple AirPods",
      price: 9527,
      rate: 4.7,
      category: 1,
    },
    {
      img: "../../assets/img/airpodspro.png",
      title: "GERLAX GH-04",
      price: 6527,
      rate: 4.7,
      category: 1,
    },
    {
      img: "../../assets/img/borofone.png",
      title: "BOROFONE BO4",
      price: 7527,
      rate: 4.7,
      category: 1,
    },
  ];

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <ProductsPage
          categories={INITIAL_CATEGORIES}
          products={INITIAL_PRODUCTS}
        />
      </div>
    </div>
  );
};

export default App;

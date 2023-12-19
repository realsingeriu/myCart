import "./App.css";
import HomePage from "./commponents/Home/HomePage";
import Navbar from "./commponents/Navbar/Navbar";
import ProductsPage from "./commponents/Products/ProductsPage";
import SingleProductPage from "./commponents/SingleProduct/SingleProductPage";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* <HomePage /> */}
        {/* <ProductsPage /> */}
        <SingleProductPage />
      </main>
    </div>
  );
};

export default App;

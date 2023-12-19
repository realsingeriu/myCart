import "./App.css";
import LoginPage from "./commponents/Authentication/LoginPage";
import CartPage from "./commponents/Cart/CartPage";
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
        {/* <SingleProductPage /> */}
        {/* <CartPage /> */}
        <LoginPage />
      </main>
    </div>
  );
};

export default App;

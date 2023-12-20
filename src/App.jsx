import "./App.css";
import LoginPage from "./commponents/Authentication/LoginPage";
import SignupPage from "./commponents/Authentication/SignupPage";
import CartPage from "./commponents/Cart/CartPage";
import HomePage from "./commponents/Home/HomePage";
import Navbar from "./commponents/Navbar/Navbar";
import ProductsPage from "./commponents/Products/ProductsPage";
import Routing from "./commponents/Routing/Routing";
import SingleProductPage from "./commponents/SingleProduct/SingleProductPage";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routing />
      </main>
    </div>
  );
};

export default App;

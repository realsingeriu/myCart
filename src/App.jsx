import "./App.css";
import HomePage from "./commponents/Home/HomePage";
import Navbar from "./commponents/Navbar/Navbar";
import ProductsPage from "./commponents/Products/ProductsPage";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* <HomePage /> */}
        <ProductsPage />
      </main>
    </div>
  );
};

export default App;

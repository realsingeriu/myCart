import { useEffect, useState } from "react";
import "./App.css";
import LoginPage from "./commponents/Authentication/LoginPage";
import SignupPage from "./commponents/Authentication/SignupPage";
import CartPage from "./commponents/Cart/CartPage";
import HomePage from "./commponents/Home/HomePage";
import Navbar from "./commponents/Navbar/Navbar";
import ProductsPage from "./commponents/Products/ProductsPage";
import Routing from "./commponents/Routing/Routing";
import SingleProductPage from "./commponents/SingleProduct/SingleProductPage";
import { jwtDecode } from "jwt-decode";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      if (jwt) {
        const jwtUser = jwtDecode(jwt);

        // 토큰 유효가능 시간 설정 유효기간 지난 토큰의 정보는 삭제
        if (Date.now() >= jwtUser.exp * 1000) {
          localStorage.removeItem("token");
          location.reload();
        } else {
          setUser(jwtUser);
          console.log(jwtUser);
        }
      }
    } catch (error) {
      console.error("Error decoding JWT:", error);
    }
  }, []);

  return (
    <div className="app">
      {/* 유저정보를 app에서 navbar로 전달 */}
      <Navbar user={user} />
      <main>
        <Routing />
      </main>
    </div>
  );
};

export default App;

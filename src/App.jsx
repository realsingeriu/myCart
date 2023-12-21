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
import { addToCartAPI } from "./Service/cartServices";
import setAuthToken from "./utils/setAuthToken";

setAuthToken(localStorage.getItem("token"));

const App = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const addTocart = (product, quantity) => {
    const updatedCart = [...cart];
    // findIndex는 모든 배열아이템과 비교해서 참이 있으면 true를 리턴하고 없으면 -1
    const productIndex = (updatedCart.findIndex = updatedCart.findIndex(
      (item) => item.product._id === product._id
    ));
    if (productIndex === -1) {
      updatedCart.push({ product: product, quantity: quantity });
    } else {
      updatedCart[productIndex].quantity += quantity;
    }
    setCart(updatedCart);
    // 백엔드 서버에 저장하기
    addToCartAPI(product._id, quantity)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    //시작시 로컬스토리지의 토큰정보를 읽어옴
    const jwt = localStorage.getItem("token");
    if (jwt == null || jwt == "") return;
    const jwtUser = jwtDecode(jwt);
    //현재 시간과 토큰종료 시간을 비교해서 만료된 토큰은 삭제한다.
    if (Date.now() >= jwtUser.exp * 1000) {
      localStorage.removeItem("token");
      location.reload();
    } else {
      setUser(jwtUser);
    }
  }, []);

  return (
    <div className="app">
      {/* 유저정보를 app에서 navbar로 전달 */}
      <Navbar user={user} cartCount={cart.length} />
      <main>
        <Routing addTocart={addTocart} />
      </main>
    </div>
  );
};

export default App;

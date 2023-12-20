import { useEffect, useState } from "react";
import "./SingleProductPage.css";
import QuantityInput from "./QuantityInput";
import { useParams } from "react-router-dom";
import Loader from "../Common/Loader";
import useData from "../../Hook/useData";

const SingleProductPage = () => {
  // 처음 시작 이미지 번호는 0 => productImage
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams(); // 주소변수 path Variable 받기
  //console.log(id);

  // useData 훅을 사용하여 데이터 가져오기
  const { data: product, error, isLoading } = useData(`/products/${id}`);
  //console.log(product);

  // 수량 증가
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  // 수량 감소
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // 장바구니 추가 로직
  const addToCart = () => {
    // 로컬 스토리지에서 저장된 장바구니 정보 가져오기
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // 현재 상품 정보
    const selectedProduct = {
      id: product._id,
      title: product.title,
      price: product.price,
      quantity: quantity,
    };

    // 이미 장바구니에 있는지 확인
    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === selectedProduct.id
    );

    if (existingProductIndex !== -1) {
      // 이미 장바구니에 있는 경우 수량 증가
      existingCart[existingProductIndex].quantity += quantity;
    } else {
      // 장바구니에 없는 경우 새로 추가
      existingCart.push(selectedProduct);
    }

    // 업데이트된 장바구니 정보를 로컬 스토리지에 저장
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // 장바구니에 추가되었다는 알림 등을 추가할 수도 있습니다.

    // 추가 후 구매개수 초기화
    setQuantity(1);
  };

  return (
    <section className="align_center single_product">
      {error && <em className="form_error">{error}</em>}
      {isLoading && <Loader />}
      {product._id && (
        <>
          <div className="align_center">
            <div className="single_product_thumbnails">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={`http://localhost:5000/products/${image}`} // 이미지 주소를 백엔드에서 가져오도록 수정
                  alt={product.title}
                  className={selectedImage === index ? "selected_image" : ""}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>

            <img
              src={`http://localhost:5000/products/${product.images[selectedImage]}`} // 이미지 주소를 백엔드에서 가져오도록 수정
              alt={product.title}
              className="single_product_display"
            />
          </div>

          <div className="single_product_details">
            <h1 className="single_product_title">{product.title}</h1>
            <p className="single_product_description">{product.description}</p>
            <p className="single_product_price">
              ￦ {product.price.toLocaleString("ko-KR")} 원
            </p>

            <h2 className="quantity_title">구매개수:</h2>
            <div className="align_center quantity_input">
              <QuantityInput
                quantity={quantity}
                setQuantity={setQuantity}
                stock={product.stock}
              />
            </div>

            <button className="search_button add_cart" onClick={addToCart}>
              장바구니 추가
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default SingleProductPage;

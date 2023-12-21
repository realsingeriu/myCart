import { useEffect, useState } from "react";
import "./SingleProductPage.css";
import QuantityInput from "./QuantityInput";
import { useParams } from "react-router-dom";
import Loader from "../Common/Loader";
import useData from "../../Hook/useData";

const SingleProductPage = ({ addTocart }) => {
  // 처음 시작 이미지 번호는 0 => productImage
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams(); // 주소변수 path Variable 받기
  //console.log(id);

  // useData 훅을 사용하여 데이터 가져오기
  const { data: product, error, isLoading } = useData(`/products/${id}`);
  //console.log(product);

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

            <button
              className="search_button add_cart"
              onClick={() => addTocart(product, quantity)}
            >
              장바구니 추가
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default SingleProductPage;

import "./QuantityInput.css";
import React from "react";

const QuantityInput = ({
  cartPage,
  productId,
  quantity,
  setQuantity,
  stock,
}) => {
  return (
    <>
      <button
        //온클릭에 감소 버튼
        onClick={() => {
          cartPage
            ? setQuantity("decrease", productId)
            : setQuantity((prev) => prev - 1);
        }}
        className="quantity_input_button"
        disabled={quantity <= 1}
      >
        {" "}
        -{" "}
      </button>
      <p className="quantity_input_count">{quantity}</p>
      <button
        // 온클릭에 증가버튼
        onClick={() => {
          cartPage
            ? setQuantity("increase", productId)
            : setQuantity((prev) => prev + 1);
        }}
        className="quantity_input_button"
        disabled={quantity >= stock}
      >
        {" "}
        +{" "}
      </button>
    </>
  );
};

export default QuantityInput;

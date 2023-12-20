import "./ProductsSidebar.css";
import rocket from "../../assets/rocket.png";
import LinkWithIcon from "../Navbar/LinkWithIcon";
import { useEffect, useState } from "react";
import apiClient from "../../utils/api-client";
import useData from "../../Hook/useData";

const ProductsSidebar = () => {
  const { data: categories, error } = useData("category");

  return (
    <aside className="products_sidebar">
      <h2>카테고리</h2>

      <div className="category_links">
        {/* Displaying error message if there is an error */}
        {error && <em className="form_error">{error}</em>}

        {/* Mapping through categories and rendering LinkWithIcon for each category */}
        {categories &&
          categories.map((category) => (
            <LinkWithIcon
              key={category._id}
              title={category.name}
              // 카테고리 별 상품 보이기 진행 할때 링크에 '/'가 앞에 잘 붙어 있는지 체크 잘 할 것!! '/'가 있어야 카테고리별 검색이 된다.
              link={`/products?category=${category.name}`}
              emoji={`http://localhost:5000/category/${category.image}`}
              sidebar={true}
            />
          ))}
      </div>
    </aside>
  );
};

export default ProductsSidebar;

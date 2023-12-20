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
              link={`products?category=${category.name}`}
              emoji={`http://localhost:5000/category/${category.image}`}
              sidebar={true}
            />
          ))}
      </div>
    </aside>
  );
};

export default ProductsSidebar;

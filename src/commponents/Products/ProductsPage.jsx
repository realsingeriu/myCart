import ProductsList from "./ProductsList";
import ProductsSidebar from "./ProductsSidebar";
import "./ProductsPage.css";

const ProductsPage = () => {
  return (
    <section className="products_page">
      {/* 왼쪽 카테고리 */}
      <ProductsSidebar />
      {/* 상품목록 */}
      <ProductsList />
    </section>
  );
};

export default ProductsPage;

import React, { useContext, useEffect } from "react";
import { fetchProducts } from "../../api/fetchProducts";
import "./Home.css";
import { ProductsContext } from "../../contexts/productsContext";
import { ProductsCard } from "../../components/ProductsCard/ProductsCard";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";

export const Home = () => {
  const { productsList, setProductsList } = useContext(ProductsContext);

  useEffect(() => {
    if (!productsList || productsList.length === 0) {
      fetchProducts("iphone").then((response) => {
        setProductsList(response);
      });
    }
  }, []);

  console.log(productsList);

  return (
    <section className="home">
      <div className="home-gallery container">
        {productsList && productsList.length > 0 ? (
          productsList.map((item) => <ProductsCard key={item.id} item={item} />)
        ) : (
          <p>Nenhum produto disponível no momento.</p>
        )}
      </div>
      <ScrollToTopButton />
    </section>
  );
};

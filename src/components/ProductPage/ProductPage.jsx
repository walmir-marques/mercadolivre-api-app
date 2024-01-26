import { useContext, useEffect, useState } from "react";
import { fetchProductsByID } from "../../api/fetchProducts";
import { ImageCarousel } from "../ImageCarousel/ImageCarousel";

import "./ProductPage.css";
import formatCurrency from "../../utils/formatCurrency";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../contexts/productsContext";

export const ProductPage = ({ id }) => {
  const [productInfo, setProductInfo] = useState(null);
  const { cartList, setCartList } = useContext(ProductsContext);

  const navigate = useNavigate();

  const handleReturnPage = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetchProductsByID(id).then((response) => {
      setProductInfo(response);
    });
  }, [id]); // Adicionado "id" como dependência para recarregar quando o ID muda

  const infos = productInfo ? productInfo.attributes.slice(0, 5) : [];

  const handleAddCart = () => {
    setCartList([...cartList, productInfo]);
    console.log(cartList);
  };

  if (!productInfo) {
    return <div>Carregando...</div>; // Ou qualquer indicador de carregamento desejado
  }

  return (
    <div>
      <button className="btn-return" onClick={handleReturnPage}>
        Voltar
      </button>
      <h1 className="product-page-title">{productInfo.title}</h1>
      <div className="product-page-items">
        <div className="product-carousel">
          <ImageCarousel pictures={productInfo.pictures} />
        </div>
        <div className="product-page-infos">
          <h2 className="infos-title">Informações do Produto</h2>
          {infos.map((item) => {
            return (
              <p className="infos-description" key={id}>
                <span className="infos-span">{item.name}</span> :{" "}
                {item.value_name}
              </p>
            );
          })}
          <div className="price-infos">
            <h2 className="price-title">Preço</h2>
            <p>
              <span className="price-text">De: </span>{" "}
              <span className="price-value-1">
                {productInfo.original_price
                  ? formatCurrency(productInfo.original_price, "BRL")
                  : ""}
              </span>
            </p>
            <p>
              <span className="price-text">Por: </span>{" "}
              <span className="price-value-2">
                {productInfo.price
                  ? formatCurrency(productInfo.price, "BRL")
                  : ""}
              </span>
            </p>
            <button className="btn-buy" onClick={handleAddCart}>
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

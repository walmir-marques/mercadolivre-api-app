import { Link } from "react-router-dom";
import "./ProductsCard.css";
import formatCurrency from "../../utils/formatCurrency";

export const ProductsCard = ({ item }) => {
  const { id, title, thumbnail, price } = item;
  const imageSrc = thumbnail.replace(/\w\.jpg/gi, "W.jpg");

  return (
    <section className="product-card">
      <Link to={`/product/${id}`}>
        <img src={imageSrc} alt="" className="card-image" />
        <h3 className="card-title">{title}</h3>
        <h6 className="card-price">{formatCurrency(price, "BRL")}</h6>
        <button type="buttom" className="card-button">
          Saiba Mais
        </button>
      </Link>
    </section>
  );
};

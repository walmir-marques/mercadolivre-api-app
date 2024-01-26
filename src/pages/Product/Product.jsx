import "./Product.css";
import { useParams } from "react-router-dom";
import { ProductPage } from "../../components/ProductPage/ProductPage";

export const Product = () => {
  const { id } = useParams();

  return (
    <div className="product container">
      <ProductPage id={id} />
    </div>
  );
};

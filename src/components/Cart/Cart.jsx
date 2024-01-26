import { Link } from "react-router-dom";
import "./Cart.css";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/productsContext";

export const Cart = () => {
  const { cartList } = useContext(ProductsContext);

  return (
    <div className="cart">
      <Link to={"/cart"} className="cart-link">
        🛒
      </Link>
      <span className={`cart-items-number ${cartList.length && "active"}`}>
        {cartList.length}
      </span>
    </div>
  );
};

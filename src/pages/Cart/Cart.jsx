import { ProductsContext } from "../../contexts/productsContext";
import "./Cart.css";
import formatCurrency from "../../utils/formatCurrency";
import React, { useContext } from "react";
import { CartItem } from "../../components/CartItem/CartItem";

export const Cart = () => {
  const { cartList } = useContext(ProductsContext);

  let totalValue = cartList.reduce((acc, item) => {
    return item.price + acc;
  }, 0);

  return (
    <section className="cart-page">
      <div className="container">
        {cartList.map((cartItem) => {
          return <CartItem data={cartItem} key={cartItem.id} />;
        })}
      </div>
      {cartList.length > 0 && (
        <div className="cart-resume">
          Total da compra : {formatCurrency(totalValue, "BRL")}
        </div>
      )}
    </section>
  );
};

import { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  const [cartList, setCartList] = useState([]);

  return (
    <ProductsContext.Provider
      value={{
        productsList,
        setProductsList,
        cartList,
        setCartList,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

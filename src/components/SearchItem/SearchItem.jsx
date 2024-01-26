import { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/productsContext";
import { fetchProducts } from "../../api/fetchProducts";
import "./SearchItem.css";
import { useNavigate } from "react-router-dom";

export const SearchItem = () => {
  const { setProductsList } = useContext(ProductsContext);
  const [searchProduct, setSearchProduct] = useState();
  const navigate = useNavigate();

  const handleSearchProduct = async (e) => {
    e.preventDefault();
    const products = await fetchProducts(searchProduct);
    setProductsList(products);
    setSearchProduct("");
    navigate("/");
  };

  return (
    <div className="search-item">
      <form className="search-form" onSubmit={handleSearchProduct}>
        <input
          className="search-form-input"
          type="text"
          placeholder="Busque um item ..."
          value={searchProduct}
          onChange={(e) => {
            setSearchProduct(e.target.value);
          }}
        />
        <button className="search-form-button">🔍</button>
      </form>
    </div>
  );
};

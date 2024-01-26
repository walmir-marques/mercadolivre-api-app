import "./Header.css";

import { Cart } from "../Cart/Cart";
import { SearchItem } from "../SearchItem/SearchItem";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-items container">
        <Link className="header-logo" to={"/"}>
          WAL-STORE
        </Link>
        <SearchItem />
        <Cart />
      </div>
    </header>
  );
};

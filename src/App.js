import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";
import { Product } from "./pages/Product/Product";
import "./App.css";
import { Header } from "./components/Header/Header";
import { ProductsProvider } from "./contexts/productsContext";

function App() {
  return (
    <div>
      <ProductsProvider>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product/:id" element={<Product />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </div>
      </ProductsProvider>
    </div>
  );
}

export default App;

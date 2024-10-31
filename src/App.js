import { Route, Routes, useNavigate } from "react-router";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import Product from "./pages/product/Product";
import Category from "./pages/category/Category";
import Categories from "./pages/categories/Categories";
import Products from "./pages/products/Products";
import CartPage from "./pages/cart/CartPage";
import { Bounce, ToastContainer } from "react-toastify";
import OffersPopup from "./components/OffersPopup/OffersPopup";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/products");
    }
  }, [navigate]);

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      
      <Navbar />

      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/products/categories" element={<Categories />} />
        <Route path="/products/category/:categoryName" element={<Category />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <OffersPopup />
    </>
  );
}

export default App;

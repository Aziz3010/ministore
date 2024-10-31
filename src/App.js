import { Route, Routes, useNavigate } from 'react-router';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Product from './pages/product/Product';
import Category from './pages/category/Category';
import Categories from './pages/categories/Categories';
import Products from './pages/products/Products';
import CartPage from './pages/cart/CartPage';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === '/') {
      navigate('/products');
    }
  }, [navigate]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/products" element={<Products />} /> {/* all products in all categories */}
        <Route path="/products/:productId" element={<Product />} /> {/* special product /men/1 || /women/14 */}
        <Route path="/products/categories" element={<Categories />} /> {/* all categories */}
        <Route path="/products/category/:categoryName" element={<Category />} /> {/* all products in special category /men || /women */}
        <Route path="/cart" element={<CartPage />} /> {/* all products in all categories */}
        <Route path="*" element={<NotFound />} /> {/* Not found page */}
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import SectionName from './components/SectionName/SectionName';
import { useLocation } from 'react-router-dom';
import Product from './pages/product/Product';
import Category from './pages/category/Category';
import Categories from './pages/categories/Categories';
import Products from './pages/products/Products';

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <Navbar />
      {pathname !== "/products" && <SectionName />}

      <Routes>
        <Route path="/products" element={<Products />} /> {/* all products in all categories */}
        <Route path="/products/:id" element={<Product />} /> {/* special product /men/1 || /women/14 */}
        <Route path="/products/categories" element={<Categories />} /> {/* all categories */}
        <Route path="/products/category/:categoryName" element={<Category />} /> {/* all products in special category /men || /women */}
        <Route path="*" element={<NotFound />} /> {/* Not found page */}
      </Routes>
    </>
  );
}

export default App;

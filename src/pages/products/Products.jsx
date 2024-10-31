import React, { useEffect, useState } from 'react'
import { fetchData } from '../../utils/api';
import { Col, Container, Row } from 'react-bootstrap';
import FilterSide from '../filterSide/FilterSide';
import MapAndRenderComponent from '../../hoc/MapAndRenderComponent';
import CardItemCom from '../../components/CardItemCom/CardItemCom';
import GridViewBtn from '../../components/GridViewBtn/GridViewBtn';
import ProductsNumberBtn from '../../components/ProductsNumberBtn/ProductsNumberBtn';
import BreadcrumbCom from '../../components/Breadcrumb/BreadcrumbCom';
import { useSelector } from 'react-redux';
import FormFloatingSelectCom from '../../components/FormFloatingSelectCom/FormFloatingSelectCom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { productsNumber, sortType } = useSelector((state) => state.product);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchData(`/products?limit=${productsNumber}&sort=${sortType}`);
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [productsNumber, sortType]);

  return (
    <section>
      <Container>
        {(() => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error}</p>;

          return (
            <Row className='h-full'>
              {/* Filter side bar */}
              <Col className="d-none d-sm-block border-r-[1px] border-gray-100 p-[15px]" sm={12} md={3} lg={4}>
                <FilterSide />
              </Col>

              {/* All Products & Sort + Grid Bar */}
              <Col className="p-[15px]" sm={12} md={9} lg={8} >

                <Container className='p-[10px]'>
                  <Row>
                    {/* Path */}
                    <BreadcrumbCom />

                    {/* Products Number Buttons */}
                    <ProductsNumberBtn />

                    {/* Grid Buttons */}
                    <GridViewBtn />

                    {/* Sort Selector */}
                    <FormFloatingSelectCom />
                  </Row>
                </Container>


                <Container className='py-[30px] px-[10px]'>
                  <Row>
                    <MapAndRenderComponent items={products} Component={CardItemCom} />
                  </Row>
                </Container>

              </Col>

            </Row>
          );
        })()}
      </Container>
    </section>
  );
};

export default Products
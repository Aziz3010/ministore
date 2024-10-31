import React, { useEffect, useState } from 'react'
import { fetchData } from '../../utils/api';
import { Col, Container, Row } from 'react-bootstrap';
import FilterSide from '../filterSide/FilterSide';
import MapAndRenderComponent from '../../hoc/MapAndRenderComponent';
import CategoriesItems from '../../components/CategoriesItems/CategoriesItems';
import GridViewBtn from '../../components/GridViewBtn/GridViewBtn';
import BreadcrumbCom from '../../components/Breadcrumb/BreadcrumbCom';
import { useSelector } from 'react-redux';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { productsNumber, sortType } = useSelector((state) => state.product);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchData(`/products/categories?limit=${productsNumber}&sort=${sortType}`);
        setCategories(data);
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
                    <BreadcrumbCom isCategory={true} />

                    {/* Grid Buttons */}
                    <GridViewBtn />
                  </Row>
                </Container>

                <Container className='py-[30px] px-[10px]'>
                  <Row>
                    <MapAndRenderComponent items={categories} Component={CategoriesItems} isCategory={true} />
                  </Row>
                </Container>

              </Col>

            </Row>
          );
        })()}
      </Container>
    </section>
  )
}

export default Categories
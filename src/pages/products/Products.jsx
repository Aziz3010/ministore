import React, { useEffect, useState } from 'react'
import { fetchData } from '../../utils/api';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './products.module.css';
import FilterSide from '../filterSide/FilterSide';

const {filterSideStyle, itemsSideStyle} = styles;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchData('/products');
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);


  return (
    <Container>
      {(() => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error}</p>;

        return (
          <Row>
            <Col className={`${filterSideStyle} d-none d-sm-block`} sm={12} md={3} lg={4} style={{backgroundColor: 'red'}}>
              <FilterSide />
            </Col>
            <Col className={itemsSideStyle} sm={12} md={9} lg={8} style={{backgroundColor: 'green'}}>b {products?.length}</Col>



            {/* {products.map(product => (
              <Col xs={12} sm={6} md={4} lg={3} key={product.id} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={product.image} alt={product.title} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                      Price: ${product.price}
                    </Card.Text>
                    <a href={`/products/${product.id}`} className="btn btn-primary">View Details</a>
                  </Card.Body>
                </Card>
              </Col>
            ))} */}
          </Row>
        );
      })()}
    </Container>
  );
};

export default Products
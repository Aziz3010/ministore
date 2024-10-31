import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { fetchData } from '../../utils/api';
import { useParams } from 'react-router';
import ProductImagesCom from '../../components/ProductImagesCom/ProductImagesCom';
import ProductDetailsCom from '../../components/ProductDetails/ProductDetailsCom';

const Product = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const { productId } = useParams();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchData(`/products/${productId}`);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <section>
      <Container>
        {(() => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error}</p>;

          return (
            <Row className='h-full'>
              <Col className="p-[15px]" sm={12} md={7}>
                <ProductImagesCom productInfo={product} />
              </Col>

              <Col className="p-[15px]" sm={12} md={5}>
                <ProductDetailsCom productInfo={product} />
              </Col>
            </Row>
          );
        })()}
      </Container>
    </section>
  )
}

export default Product
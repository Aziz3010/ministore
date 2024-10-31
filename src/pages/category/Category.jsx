import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import FilterSide from '../filterSide/FilterSide';
import BreadcrumbCom from '../../components/Breadcrumb/BreadcrumbCom';
import GridViewBtn from '../../components/GridViewBtn/GridViewBtn';
import MapAndRenderComponent from '../../hoc/MapAndRenderComponent';
import { useSelector } from 'react-redux';
import { fetchData } from '../../utils/api';
import CardItemCom from '../../components/CardItemCom/CardItemCom';

const Category = () => {
    const { categoryName } = useParams();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { productsNumber, sortType } = useSelector((state) => state.product);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchData(`/products/category/${categoryName}?limit=${productsNumber}&sort=${sortType}`);
                console.log(data);
                
                setCategories(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (categoryName) {
            loadProducts();
        }
    }, [productsNumber, categoryName, sortType]);


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
                                        <GridViewBtn isCategory={true} />
                                    </Row>
                                </Container>

                                <Container className='py-[30px] px-[10px]'>
                                    <Row>
                                        <MapAndRenderComponent items={categories} Component={CardItemCom} />
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

export default Category
import React, { useState } from 'react';
import { Col, Button, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FcGoogle } from "react-icons/fc";
import PaymentMethods from '../PaymentMethods/PaymentMethods';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/features/cartSlice';

const ProductDetailsCom = ({ productInfo }) => {
    const dispatch = useDispatch();
    const [selectedSize, setSelectedSize] = useState(0);

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleAddToCart = () => {
        dispatch(addItem({ id: productInfo?.id, image: productInfo?.image, name: productInfo?.title, price: productInfo?.price, quantity: 1 }))
    };

    return (
        <Row className='gap-[20px]'>
            {/* Brand */}
            <Col sm={12}>
                <h2 className='capitalize'>{productInfo?.category}</h2>
            </Col>

            {/* Desc */}
            <Col sm={12}>
                <h2>Description: </h2>
                <h2>{productInfo?.description}</h2>
            </Col>

            {/* Price */}
            <Col sm={12}>
                <p>Price: ${productInfo?.price}</p>
            </Col>


            {/* Size */}
            <Col sm={12}>
                <Form.Select value={0} onChange={handleSizeChange}>
                    <option value="">Select Size</option>
                    <option value={39}>39</option>
                    <option value={41}>41</option>
                    <option value={42}>42</option>
                </Form.Select>
            </Col>

            {/* Add To Cart */}
            <Col sm={12}>
                <Button
                    variant="dark"
                    onClick={handleAddToCart}
                    disabled={!selectedSize}
                    className="mt-3 w-full"
                >
                    Add To Cart
                </Button>
            </Col>

            {/* Pay */}
            <Col sm={12}>
                <Button
                    variant='success'
                    onClick={() => { }}
                    disabled={!selectedSize}
                    className="w-full flex items-center justify-center gap-[4px] "
                >
                    Pay with <FcGoogle /> Pay
                </Button>
            </Col>

            {/* Payment logos can be added here */}
            <PaymentMethods />

        </Row>
    );
}

export default ProductDetailsCom
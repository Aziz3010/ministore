import React, { useState } from 'react';
import { Col, Button, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FcGoogle } from "react-icons/fc";

const ProductDetailsCom = ({ productInfo }) => {
    const [selectedSize, setSelectedSize] = useState(0);

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleAddToCart = () => {
        console.log(`Added ${productInfo?.name} of size ${selectedSize} to the cart.`);
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


            <Col sm={12}>
                {/* Size */}
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
                    onClick={handleAddToCart}
                    disabled={!selectedSize}
                    // className="mt-3 w-full border-0 bg-slate-800 hover:bg-slate-950"
                    className="mt-3 w-full"
                >
                    Add To Cart
                </Button>
            </Col>

            {/* Pay */}
            <Col sm={12}>
                <Button
                    onClick={handleAddToCart}
                    disabled={!selectedSize}
                    // className="mt-3 w-full flex items-center justify-center gap-[4px] border-[1px] border-[#000] hover:border-[#000] rounded-md bg-transparent hover:bg-slate-800 text-[#000] hover:text-[#000] "
                    className="mt-3 w-full flex items-center justify-center gap-[4px] "
                >
                    Pay with <FcGoogle /> Pay
                </Button>
            </Col>

            {/* Payment logos can be added here */}
            <Col sm={12} className='mt-[20px]'>
                <h5 className=' mb-[8px] text-[15px]'>Accepted Payment Methods</h5>
                <div className='flex items-center justify-center gap-[12px]'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="w-[50px] h-[40px] object-contain" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="MasterCard" className="w-[50px] h-[40px] object-contain" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="PayPal" className="w-[50px] h-[40px] object-contain" />
                    <img src="https://1000logos.net/wp-content/uploads/2016/10/American-Express-Color.png" alt="American Express" className="w-[50px] h-[40px] object-contain" />
                    <img src="https://e7.pngegg.com/pngimages/557/637/png-clipart-discover-financial-services-discover-card-credit-card-diners-club-international-credit-card-text-rectangle-thumbnail.png" alt="Discover" className="w-[50px] h-[40px] object-contain" />
                    <img src="https://developer.apple.com/news/images/og/apple-pay-og-twitter.jpg" alt="Apple Pay" className="w-[50px] h-[40px] object-contain" />
                </div>
            </Col>

        </Row>
    );
}

export default ProductDetailsCom
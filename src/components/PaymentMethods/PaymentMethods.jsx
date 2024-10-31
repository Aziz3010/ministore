import React from 'react'
import { Col } from 'react-bootstrap'

const PaymentMethods = () => {
    return (
        <Col sm={12} className='mt-[20px]'>
            <h5 className=' mb-[8px] text-[15px]'>Accepted Payment Methods</h5>
            <div className='flex items-center justify-start gap-[12px]'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="w-[50px] h-[40px] object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="MasterCard" className="w-[50px] h-[40px] object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="PayPal" className="w-[50px] h-[40px] object-contain" />
                <img src="https://1000logos.net/wp-content/uploads/2016/10/American-Express-Color.png" alt="American Express" className="w-[50px] h-[40px] object-contain" />
                <img src="https://e7.pngegg.com/pngimages/557/637/png-clipart-discover-financial-services-discover-card-credit-card-diners-club-international-credit-card-text-rectangle-thumbnail.png" alt="Discover" className="w-[50px] h-[40px] object-contain" />
                <img src="https://developer.apple.com/news/images/og/apple-pay-og-twitter.jpg" alt="Apple Pay" className="w-[50px] h-[40px] object-contain" />
            </div>
        </Col>
    )
}

export default PaymentMethods
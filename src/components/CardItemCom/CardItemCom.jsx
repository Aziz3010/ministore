import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// 6 & 4 & 3

const CardItemCom = ({ id, image, title, price }) => {
    const {gridView} = useSelector((state)=>state.product);

    return (
        <Col xs={gridView} className='max-h-[232px] p-[10px]'>
            <Link to={`/products/${id}`}>
                <Card className="text-center border-0 ">
                    <Card.Img variant="top" src={image} alt={title} className='object-contain h-[100px]' />
                    <Card.Body>
                        <Card.Title className='truncate text-[15px]'>{title}</Card.Title>
                        <Card.Text>
                            ${price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}

export default CardItemCom
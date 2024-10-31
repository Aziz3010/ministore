import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const CategoriesItems = (props) => {
    const { gridView } = useSelector((state) => state.product);

    return (
        <Col xs={gridView} className='max-h-[232px] p-[8px]'>
            <div className='capitalize'></div>
            <Link to={`/products/category/${props?.item}`}>
                <Card className="text-center border-0 ">
                    <Card.Img variant="top" src={'/assets/defaultIamge.svg'} alt={props?.item} className='object-contain h-[100px]' />

                    <Card.Body>
                        <Card.Title className='truncate text-[15px] capitalize'>{props?.item}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}

export default CategoriesItems
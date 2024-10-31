import React from 'react';
import { Table, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalPrice, decreaseQuantity, increaseQuantity } from '../../store/features/cartSlice';

const CartPage = () => {
    const dispatch = useDispatch();
    const { cartItemsState } = useSelector((state) => state.cart);
    const totalPrice = useSelector(selectTotalPrice);

    return (
        <section>
            <Container>
                <Row className='justify-center'>
                    <Col sm={12}>
                        <Table striped bordered hover className="mt-4 text-center">
                            <thead>
                                <tr>
                                    <th>Num</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price ($)</th>
                                    <th>Quantity</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItemsState?.length ?
                                    cartItemsState.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{index + 1}</td>
                                            <td className='flex justify-center items-center'><img src={item.image} alt={item.name} className='w-[40px] h-[40px] rounded' /></td>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>{item.quantity}</td>
                                            <td>
                                                <Button
                                                    variant="success"
                                                    size="sm"
                                                    onClick={() => dispatch(increaseQuantity(item.id))}
                                                    className="me-2"
                                                >
                                                    +
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    onClick={() => dispatch(decreaseQuantity(item.id))}
                                                >
                                                    -
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                    :
                                    <tr>
                                        <td colSpan={6}>No items</td>
                                    </tr>
                                }
                            </tbody>
                        </Table>
                    </Col>

                    <Col sm={8}>
                        <Button
                            variant='success'
                            onClick={() => { }}
                            disabled={!cartItemsState?.length}
                            className="w-full flex items-center justify-center"
                        >
                            Checkout
                        </Button>
                    </Col>

                    <Col sm={4} className='flex justify-start items-center gap-3'>
                        <h5 className='font-bold'>Total:</h5>
                        <h6>{totalPrice}$</h6>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CartPage;

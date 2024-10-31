import React, { useEffect } from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { changeProductsNumber } from '../../store/features/productSlice';
import { getProductNumber, setProductNumber } from '../../utils/gridView';
import { ProductsNumberBtnValue } from '../../constants';

const ProductsNumberBtn = () => {
    const dispatch = useDispatch();
    const { productsNumber } = useSelector((state) => state.product);

    const handleGridViewChange = (num) => {
        setProductNumber(num);
        dispatch(changeProductsNumber(num));
    };

    useEffect(() => {
        dispatch(changeProductsNumber(getProductNumber()));
    }, [dispatch]);

    return (
        <Col sm={3} className='flex items-center justify-center gap-[4px]'>
            <h3 className='text-[14px]'>Show :</h3>
            <h4 onClick={() => { handleGridViewChange(ProductsNumberBtnValue[0]) }} className={`cursor-pointer text-[14px] ${productsNumber === ProductsNumberBtnValue[0] ? "font-bold" : "font-normal"}`}>{ProductsNumberBtnValue[0]}</h4>
            <span className='text-[14px]'>/</span>
            <h4 onClick={() => { handleGridViewChange(ProductsNumberBtnValue[1]) }} className={`cursor-pointer text-[14px] ${productsNumber === ProductsNumberBtnValue[1] ? "font-bold" : "font-normal"}`}>{ProductsNumberBtnValue[1]}</h4>
            <span className='text-[14px]'>/</span>
            <h4 onClick={() => { handleGridViewChange(ProductsNumberBtnValue[2]) }} className={`cursor-pointer text-[14px] ${productsNumber === ProductsNumberBtnValue[2] ? "font-bold" : "font-normal"}`}>{ProductsNumberBtnValue[2]}</h4>
        </Col>
    )
}

export default ProductsNumberBtn
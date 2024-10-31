import React, { useEffect } from 'react'
import { Col } from 'react-bootstrap'
import { HiOutlineViewGrid } from "react-icons/hi";
import { BsGrid3X3Gap } from "react-icons/bs";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import { TbLayoutGridFilled } from "react-icons/tb";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { changeGridView } from "../../store/features/productSlice";
import { getGridViewType, setGridViewType } from '../../utils/gridView';

const GridViewBtn = () => {
    const dispatch = useDispatch();
    const { gridView } = useSelector((state) => state.product);

    const handleGridViewChange = (type) => {
        setGridViewType(type);
        dispatch(changeGridView(type));
    };

    useEffect(() => {
        dispatch(changeGridView(getGridViewType()));
    }, [dispatch]);

    return (
        <Col sm={2} className='flex items-center justify-start gap-[8px] sm:justify-center my-[10px] sm:my-[0px]'>
            {gridView === 6 ? <TbLayoutGridFilled onClick={() => { handleGridViewChange(6) }} className='cursor-pointer' /> : <HiOutlineViewGrid onClick={() => { handleGridViewChange(6) }} className='cursor-pointer' />}
            {gridView === 4 ? <BsGrid3X3GapFill onClick={() => { handleGridViewChange(4) }} className='cursor-pointer' /> : <BsGrid3X3Gap onClick={() => { handleGridViewChange(4) }} className='cursor-pointer' />}
            {gridView === 3 ? <TfiLayoutGrid4Alt onClick={() => { handleGridViewChange(3) }} className='cursor-pointer' /> : <TfiLayoutGrid4 onClick={() => { handleGridViewChange(3) }} className='cursor-pointer' />}
        </Col>
    )
}

export default GridViewBtn
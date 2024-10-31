import { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { getSortType, setSortType } from '../../utils/gridView';
import { changeSortType } from '../../store/features/productSlice';

//  'desc' or 'asc'

function FormFloatingSelectCom() {
    const dispatch = useDispatch();
    const { sortType } = useSelector((state) => state.product);

    const handleGridViewChange = (e) => {
        const selectedType = e.target.value;
        setSortType(selectedType);
        dispatch(changeSortType(selectedType));
    };

    useEffect(() => {
        dispatch(changeSortType(getSortType()));
    }, [dispatch]);


    return (
        <Col sm={3}>
            <Form.Select value={sortType} onChange={handleGridViewChange}>
                <option value="desc">Low Price</option>
                <option value="asc">High Price</option>
            </Form.Select>
        </Col>
    );
}

export default FormFloatingSelectCom;
import React, { useEffect } from 'react'
import { useParams } from 'react-router';

const Category = () => {
    const { categoryName } = useParams();

    console.log(categoryName, 'categoryName');

    useEffect(()=>{
        if(categoryName) {
            
        }
    }, [categoryName]);

    return (
        <div>Category</div>
    )
}

export default Category
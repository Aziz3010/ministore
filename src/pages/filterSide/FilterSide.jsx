import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

const filterOptions = [
    { text: "Product category", list: [] },
    { text: "Filter by price", list: [] },
];

const FilterSide = () => {
    return (
        <ul>
            {filterOptions?.map((item, index) =>
                <li key={index} className='flex items-center justify-between p-[10px]'>
                    <h3>{item?.text}</h3>
                    <IoIosArrowDown />
                </li>
            )
            }
        </ul>
    )
}

export default FilterSide
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './sectionName.module.css';
import { FaLongArrowAltLeft } from "react-icons/fa";
import usePathSegment from '../../hooks/usePathSegment';

const { SectionNameStyle, segmentStyle } = styles;

const SectionName = () => {
    const segment = usePathSegment();
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className={SectionNameStyle}>
            <FaLongArrowAltLeft onClick={handleBackClick} style={{ cursor: 'pointer' }} />
            <h1 className={segmentStyle}>{segment}</h1>
        </div>
    )
}

export default SectionName
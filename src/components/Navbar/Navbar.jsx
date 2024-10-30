import React from 'react';
import styles from './navbar.module.css';
import { MapAndRenderComponent } from '../../hoc/MapAndRenderComponent';
import { NAVBARLIST } from '../../constants';
import ListComponent from '../ListComponent/ListComponent';

const { navStyle } = styles;

const Navbar = () => {

    return (
        <nav className={navStyle}>
            <MapAndRenderComponent items={NAVBARLIST} Component={ListComponent} />
        </nav>
    );
};

export default Navbar;

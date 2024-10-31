import React from 'react';
import styles from './navbar.module.css';
import MapAndRenderComponent from '../../hoc/MapAndRenderComponent';
import { NAVBARLIST } from '../../constants';
import ListComponent from '../ListComponent/ListComponent';
import { useLocation } from 'react-router';
import SectionName from '../SectionName/SectionName';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";

const { navStyle, navLinkStyle, activeNavLinkStyle } = styles;

const Navbar = () => {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <nav className={navStyle}>
            <div className='w-full flex items-center justify-between h-[40px]'>
                <div className='w-full flex items-center justify-center gap-[20px]'>
                    <MapAndRenderComponent items={NAVBARLIST} Component={ListComponent} />
                </div>

                <div className='px-[20px] cursor-pointer flex items-center justify-center'>
                    <NavLink to={"/cart"} className={({ isActive }) => (isActive ? `${navLinkStyle} ${activeNavLinkStyle}` : navLinkStyle)} end>
                        <FiShoppingCart />
                        <h3 className='text-[14px]'>Cart</h3>
                    </NavLink>
                </div>
            </div>

            {pathname !== "/products" && <div className='w-full'>
                <SectionName />
            </div>}
        </nav>
    );
};

export default Navbar;

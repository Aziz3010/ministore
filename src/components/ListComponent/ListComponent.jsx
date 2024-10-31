import { NavLink } from "react-router-dom";
import styles from '../Navbar/navbar.module.css';

const { navLinkStyle, activeNavLinkStyle } = styles;

const ListComponent = ({ name, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? `sm:mx-[10px] mx-[5px] ${navLinkStyle} ${activeNavLinkStyle}` : `sm:mx-[10px] mx-[5px] ${navLinkStyle}`)}
      end
    >
      {name}
    </NavLink>
  );
};

export default ListComponent;

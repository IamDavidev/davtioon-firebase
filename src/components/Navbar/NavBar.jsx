import StyledNav from './StyledNav';
import logo from '../../Assets/logo.svg';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <StyledNav>
      <div className="navbarLogo">
        <img src={logo} alt="" />
      </div>
      <div className="navbarLinks">
        <div className="navLink">
          <ul>
            <li>
              <Link to="/login"> Login </Link>
            </li>
            <li>
              <Link to="/notes"> notes  </Link>
            </li>
            <li>
              <Link to="/login"> link </Link>
            </li>
          </ul>
        </div>
        <div className="navAuth">hola como</div>
      </div>
    </StyledNav>
  );
};

export default NavBar;

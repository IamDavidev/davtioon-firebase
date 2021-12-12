import StyledNav from './StyledNav';
import logo from '../../Assets/logo.svg';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <StyledNav>
      <div className="navbarLogo">
        <Link to="/home">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbarLinks">
        <div className="navLink">
          <ul>
            <li>
              <Link to="/home"> Home </Link>
            </li>
            <li>
              <Link to="/notes/search"> search </Link>
            </li>
            {/* <li>
              <Link to="/login"> link </Link>
            </li> */}
          </ul>
        </div>
        <div className="navAuth">
          <Link to='/login'>Sign Up</Link>
        </div>
      </div>
    </StyledNav>
  );
};

export default NavBar;

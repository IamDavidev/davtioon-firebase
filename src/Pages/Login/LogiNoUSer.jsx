import { useContext } from 'react';
import { ContextUser, Nouser } from '../../Utils/context';
import { StyledNoUser } from './StyledLogin';
import {Link} from 'react-router-dom';
const LogiNoUSer = () => {
  const { authUser, setAuthUser } = useContext(ContextUser);
  const loggout = () => {
    setAuthUser(Nouser);
    localStorage.removeItem('user');
  };

  return (
    <StyledNoUser>
      <h1>logout</h1>
      <span>logout from your account</span>
      <Link to="/home">
        Home
      </Link>
      <Link to="/notes/add">
        add notes 
      </Link>
      <button onClick={loggout}>Logout</button>
    </StyledNoUser>
  );
};

export default LogiNoUSer;

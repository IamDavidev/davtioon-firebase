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
      <p>logout from your account</p>
      <Link to="/home">
        Home
      </Link>
      <Link to="/notes/add">
        add notes 
      </Link>
      <button onClick={loggout}>loggout</button>
    </StyledNoUser>
  );
};

export default LogiNoUSer;

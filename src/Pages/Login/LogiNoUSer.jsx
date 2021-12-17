import { useContext } from 'react';
import { ContextUser, StateContext } from '../../Utils/context';
import { StyledNoUser } from './StyledLogin';

const LogiNoUSer = () => {
  const { authUser, setAuthUser } = useContext(ContextUser);
  const loggout = () => {
    setAuthUser(StateContext);
  };

  return (
    <StyledNoUser>
      <h1>logout</h1>
      <p>logout from your account</p>
      <button onClick={loggout}>loggout</button>
    </StyledNoUser>
  );
};

export default LogiNoUSer;

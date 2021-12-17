import { LoginContainer } from './StyledLogin';
import github from '../../Assets/github.svg';
import google from '../../Assets/google.svg';
import { useNavigate } from 'react-router';
import {
  HandleAccesUser,
  HandleLoginWithGoogle,
} from '../../Firebase/FirebaseAuth';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/config';
import { useContext } from 'react';
import { ContextUser } from '../../Utils/context';
import LoginUser from './LoginUser';
import LogiNoUSer from './LogiNoUSer';
const Login = () => {
  const { authUser, setAuthUser } = useContext(ContextUser);

  return (
    <LoginContainer>
      {!authUser.isLoggedIn ? <LoginUser /> : <LogiNoUSer />}
      <Toaster />
    </LoginContainer>
  );
};

export default Login;

import { LoginContainer } from './StyledLogin';
import github from '../../Assets/github.svg';
import google from '../../Assets/google.svg';
import { useNavigate } from 'react-router';
import {
  // HandleAccesUser,
  HandleLogin,
  HandleLoginWithGoogle,
} from '../../helpers/functionHandles';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/config';
import { useContext } from 'react';
import { ContextUser } from '../../Utils/context';
const Login = () => {
  const navigate = useNavigate();
  const { authUser, setAuthUser } = useContext(ContextUser);
  const handle = () => {
    HandleLoginWithGoogle();
  };
  const handleLogin = (e) => {
    dispatch(HandleLogin('hola', 'uid', 'email'));
  };
  const HandleAccesUser = (evt) => {
    evt.preventDefault();
    const mail = evt.target.email.value;
    const password = evt.target.password.value;
    signInWithEmailAndPassword(auth, mail, password)
      .then(({user}) => {
        const { uid } = user;
        const name = user.displayName || " ";
        const email = user.email;
        console.log(user);
       setAuthUser({
          name,
          email,
          uid,
          isLoggedIn : true,
       })
       console.log(authUser);
       return navigate('/home');
      })
      .catch((err) => {
        const errorcode = err.code;
        const errormessage = err.message;
        console.log('user did not sign up correctly');
        console.log(err.code);
        console.log(err.message);
        return toast.error(err.message);
      });
  };
  return (
    <LoginContainer>
      <div className="login">
        <div className="wlogin">
          <h1>
            Welcome to <span>Davtion</span>.
          </h1>
          <p>
            please create an account to access your notes or log in with google
            or github
          </p>
          <p>
            login whit <span>google</span> or <span>github</span>{' '}
          </p>
          <div className="loginBtn">
            <button onClick={handleLogin}>
              <strong>
                Github
                <img src={github} alt="" />
              </strong>
            </button>
            <button onClick={handle}>
              <strong>
                Google
                <img src={google} alt="" />
              </strong>
            </button>
          </div>
        </div>
        <div className="loginForm">
          <form onSubmit={HandleAccesUser}>
            <h1>Login</h1>
            <p>
              Don't have an account?
              <Link to="/register">Creat Your Account </Link>
              it takes less than a minute
            </p>
            <input
              required
              type="email"
              placeholder="Email or user name"
              name="email"
            />
            <input
              required
              type="password"
              placeholder="Password"
              name="password"
            />
            <button>login</button>
          </form>
        </div>
      </div>
      <Toaster />
    </LoginContainer>
  );
};

export default Login;

import { LoginContainer } from './StyledLogin';
import github from '../../Assets/github.svg';
import google from '../../Assets/google.svg';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import {
  HandleAccesUser,
  HandleLogin,
  HandleLoginWithGoogle,
} from '../../helpers/functionHandles';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handle = () => {
    HandleLoginWithGoogle();
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
            <button>
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
          <form onSubmit={(evt) => HandleAccesUser({ evt, navigate })}>
            <h1>Login</h1>
            <p>
              Don't have an account?
              <Link to="/register">Creat Your Account </Link>
              it takes less than a minute
            </p>
            <input required type="email" placeholder="Email or user name" name="email" />
            <input required type="password" placeholder="Password" name="password"/>
            <button>login</button>
          </form>
        </div>
      </div>
      <Toaster />
    </LoginContainer>
  );
};

export default Login;

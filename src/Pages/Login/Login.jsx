import { LoginContainer } from './StyledLogin';
import github from '../../Assets/github.svg';
import google from '../../Assets/google.svg';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { HandleLogin } from '../../helpers/functionHandles';
const Login = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const HandleSubmit = (e) => {
    e.preventDefault();
    Navigate('/home');
  };
  const HandleGoogle = () => {
    dispatch(HandleLogin("contrasenia_segura","David Sánchez"));
    console.log("google")
  }
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
            <button onClick={HandleGoogle}>
              <strong>
                Google
                <img src={google} alt="" />
              </strong>
            </button>
          </div>
        </div>
        <div className="loginForm">
          <form onSubmit={HandleSubmit}>
            <h1>Login</h1>
            <p>
              Don't have an account?
              <a>Creat Your Account </a>
              it takes less than a minute
            </p>
            <input required type="email" placeholder="Email or user name " />
            <input required type="password" placeholder="Password" />
            <button>login</button>
          </form>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;

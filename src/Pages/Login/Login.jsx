import { LoginContainer } from './StyledLogin';
import github from '../../Assets/github.svg';
import google from '../../Assets/google.svg';
import { HandleHome } from '../../helpers/hadles';
import { useNavigate } from 'react-router';
const Login = () => {
  const Navigate = useNavigate()
  const HandleSubmit = (e) => {
    e.preventDefault();
    Navigate('/home')
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
            <a>
              <strong>
                Github
                <img src={github} alt="" />
              </strong>
            </a>
            <a>
              <strong>
                Google
                <img src={google} alt="" />
              </strong>
            </a>
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
            <input  required type="password" placeholder="Password" />
            <button >login</button>
          </form>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;

import { LoginContainer, Loginform, Wlogin } from './StyledLogin';

const Login = () => {
  return (
    <div className="" style={{ margin: '4px' }}>
      <LoginContainer>
        <Wlogin>
          <h1>
            <em>
              Welcome to <span>DavTion </span>
            </em>
          </h1>
          <p>
            please create an account to access your notes or log in with google
            or github
          </p>
          <strong>
            login whit <span>google</span> or <span>github</span>
          </strong>
        </Wlogin>
        <Loginform>
          <form>
            <input type="email" />
            <input type="password" />
          </form>
        </Loginform>
      </LoginContainer>
    </div>
  );
};

export default Login;

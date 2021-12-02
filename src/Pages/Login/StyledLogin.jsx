import styled from 'styled-components';
import { theme } from '../../StyledMain';
export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 10px 2rem;

  .login {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    height: 100vh;
    margin: 20px;
    background-color: ${theme.$secondary};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }

  .wlogin {
    grid-row: 1/2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: 0.3px solid #000000;
    span {
      color: #0ff;
    }
    p {
      font-size: 0.8rem;
    }
    img {
      width: 40px;
      display: flex;
    }
  }

  .loginForm {
    grid-row: 2/5;
    display: flex;
    justify-content: center;

    span {
      color: #ff0000;
    }
    p {
      font-size: 0.8rem;
      padding: 1rem;
    }
    a {
      color: #0ff;
    }
    input {
      margin-bottom: 1rem;
      display: block;
      align-self: center;
      color: white;
      border: none;
      outline: none;
      background: ${theme.$secondary};
      margin: 1rem 10px;
      border-bottom: 2px solid #000000;
      &::placeholder {
        color: #ffffff;
      }
    }
  }
`;

//

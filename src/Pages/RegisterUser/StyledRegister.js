import styled from 'styled-components';
import { theme } from '../../StyledMain';

export const StyledRegister = styled.div`
  background-color: ${theme.$primary};
  margin: 1rem;

  .inputRegister {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    margin: 1rem;
    color: ${theme.$secondary};
  }
  .icon {
    font-size: 2rem;
    color: #000;
  }
  input {
    border: none;
    border-bottom: 1px solid ${theme.$secondary};
    background-color: ${theme.$primary};
    color: ${theme.$pre};
    font-size: 1rem;
    padding: 0.5rem;
    margin: 0.3rem;
    :focus {
      outline: none;
    }
    ::placeholder {
      color: #000;
    }
  }
  button {
    font-size: 1rem;
    background: fixed;
    border: none;
    margin: 0.3rem;
    text-transform: uppercase;
    width:10rem;
    border-bottom: 2px solid ${theme.$secondary};
    :hover {
      border-bottom: 2px solid #0fff;
      transition: all 0.2s ease-in-out;
    }
  }
  @media (min-width: 900px) {
    height: 100vh;
    .inputRegister {
      display: flex;
      flex-direction: row;
      padding: 1rem;
      margin: 1rem;
    }
    .icon {
      display: flex;
    }
    input {
      width: 50%;
      display: flex;
    }
  }
`;

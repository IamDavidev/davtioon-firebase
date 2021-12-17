import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../StyledMain';

const NoUserStyled = styled.div`
  background: ${theme.$primary};
  color: #000;
  margin: 2rem 3rem;
  border-radius: 1rem;
  padding: 1rem;
  button {
    background: ${theme.$primary};
    border: none;
    border-radius: 1rem;
    padding: 1rem;
    color: ${theme.$pre};
    font-size:2rem;
    letter-spacing: .4rem;
    text-transform: uppercase;
    border-bottom: 2px solid ${theme.$secondary};
  }
`;

const NoUser = () => {
  const navigate = useNavigate();
  const HandleLogin = () => {
    navigate('/login');
  };
  return (
    <NoUserStyled>
      <h1>No user</h1>
      <p>Please login to view your Notes </p>
      <button onClick={HandleLogin}>login</button>
    </NoUserStyled>
  );
};

export default NoUser;




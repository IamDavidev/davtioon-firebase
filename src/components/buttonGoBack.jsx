import { RiArrowGoBackLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../StyledMain';
const ButtonGoBackS = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 3rem;
  button {
    background: ${theme.$primary};
    border: none;
    border-radius: 1rem;
    padding: 1rem;
    width: 3rem;
    color: ${theme.$pre};
  }
`;

const ButtonGoBack = () => {
  const navigate = useNavigate();

  function ƒHandleGoBack() {
    navigate(-1);
  }
  return (
    <ButtonGoBackS>
      <button onClick={ƒHandleGoBack}>
        <RiArrowGoBackLine />
      </button>
    </ButtonGoBackS>
  );
};

export default ButtonGoBack;

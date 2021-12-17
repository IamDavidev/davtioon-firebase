import styled from 'styled-components';
import { theme } from '../../StyledMain';

const SyledSearch = styled.div`
  background-color: ${theme.$primary};
  margin: 2rem 3rem;
  border-radius: 1rem;
  padding: 0.5rem;
  min-height: 25rem;
  h1 {
    color: ${theme.$tertiary};
  }
  .icon {
    color: ${theme.$pre};
    font-size: 2rem;
  }
  input {
    border-radius: 0.5rem;
    font-size: 1rem;
    background: ${theme.$primary};
    color:#fff;
    border: none;
    padding: 0.5rem;
    border-bottom: 3px solid ${theme.$secondary};
    :focus {
      outline: none;
    }
  }
  button {
    background: ${theme.$primary};
    border: none;
    color: ${theme.$pre};
    padding: 0.5rem;
    margin-top: 1.8rem;
    font-size: 1.2rem;
    border-bottom: 3px solid ${theme.$secondary};
  }
`;

export default SyledSearch;

import styled from 'styled-components';
import { theme } from '../../StyledMain';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background-color: ${theme.$primary};
  margin: auto 3rem;
  border-radius:1rem;
  color:white;
  padding:.5rem;
  a {
    color: ${theme.$pre};
    padding:0 2rem;
  }
`;

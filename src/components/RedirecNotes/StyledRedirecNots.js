import styled from 'styled-components';
import { theme } from '../../StyledMain';

export const StyleRedirecNots = styled.main`
  background: ${theme.$primary};
  margin:1rem 2rem;
  border-radius: 1rem;
  padding: 5rem 0;
  h2{
    color:${theme.$tertiary};
  }
  button{
    background: ${theme.$primary};
    border:none;
    color:${theme.$pre};
    border-bottom: 1px solid ${theme.$tertiary};
    margin:0.5rem;
    letter-spacing:0.4rem
   
  }
`;





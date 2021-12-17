import styled from 'styled-components';
import { theme } from '../../StyledMain';

export const StyleRedirecNots = styled.main`
  background: ${theme.$primary};
  margin:1rem 2rem;
  border-radius: 1rem;
  padding: 3rem 0;
  h2{
    color:${theme.$tertiary};
    font-size:2rem;
  }
  button{
    background: ${theme.$primary};
    border:none;
    color:${theme.$pre};
    border-bottom: 1px solid ${theme.$tertiary};
    margin:0.5rem;  
    font-size: 1.2rem;
  }
`;





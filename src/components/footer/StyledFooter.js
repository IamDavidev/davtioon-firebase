import styled from 'styled-components';
import { theme } from '../../StyledMain';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  a {
    color: ${theme.$pre};
    padding:0 2rem;
  }
`;

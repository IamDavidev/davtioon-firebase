import styled from 'styled-components';
import { theme } from '../../StyledMain';

export const StyleRedirecNots = styled.main`
  background: ${theme.$primary};
  margin: 1rem 2rem;
  border-radius: 1rem;
  padding: 3rem 0;
  h2 {
    color: ${theme.$tertiary};
    font-size: 2rem;
    margin:0;
  }
  .btnRender{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

  }
  button {
    background: ${theme.$primary};
    border: none;
    color: ${theme.$pre};
    font-weight:bold;
    border-bottom: 2px solid #00f;
    margin:1rem;
    font-size: 1.2rem;
    display:block;
    width:6rem;
    :hover{
      border-bottom: 2px solid #fff
    }
  }
  .btnImportant{
    margin-top:4rem

}
`;

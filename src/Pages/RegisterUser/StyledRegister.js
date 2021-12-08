import styled from 'styled-components';
import { theme } from '../../StyledMain';

export const StyledRegister = styled.div`
    background-color: ${theme.$primary};
    margin:1rem;
    .inputRegister{
        text-align:left;
        margin:1rem;
        color:${theme.$secondary};
    }
    input{
        display:block;
    }
`


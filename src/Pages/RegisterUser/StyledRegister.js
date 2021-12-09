import styled from 'styled-components';
import { theme } from '../../StyledMain';

export const StyledRegister = styled.div`
    background-color: ${theme.$primary};
    margin:1rem;
    .inputRegister{
        display:flex;
        flex-direction:column;
        justify-content:center;
        text-align:left;
        margin:1rem;
        color:${theme.$secondary};
    }
    .icon{
        font-size:2rem;
        color:#000;
    }
    input{
        border:none;
        border-bottom:1px solid ${theme.$secondary};
        background-color:${theme.$primary};
        color:${theme.$pre};
        font-size:1rem;
        padding:0.5rem;
        margin:0.3rem;
        :focus{
            outline:none;

        }
        ::placeholder{
            color:#000;
        }
    }
`


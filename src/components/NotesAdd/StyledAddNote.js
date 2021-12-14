import Styled from 'styled-components';
import { theme } from '../../StyledMain';

const AddNote = Styled.div`
    padding:3rem ;
    background: ${theme.$primary};
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,1);
     form{
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        align-items: center;
        justify-content: center;
        padding:1rem;
    }
    textArea{
        min-width:40rem;
        min-height: 20rem;
        width:40rem;
        height: 20rem;
        max-width: 40rem;
        max-height: 20rem;
        border:3px solid ${theme.$secondary};
        border-radius: 1rem;
        background: ${theme.$primary};
        :focus{
            outline:none;
        }
    }
    .textContent{
        grid-column: 2/3;
    }
    label{
        display:flex;
        align-items: center;
        padding:1rem;

    }
    input{
    border: none;
    border-bottom: 1px solid ${theme.$secondary};
    background-color: ${theme.$primary};
    color: ${theme.$pre};
    font-size: 1rem;
    padding: 0.5rem;
    margin: 0.3rem;
    :focus {
      outline: none;
    }
    ::placeholder {
      color: #000;
      letter-spacing: 0.3rem;
    }
    }
    input[type=checkbox]{
        height: 2rem;
        width: 2rem;
        border-radius: 1rem;
        display: inline-flex;
    align-items: center;
    cursor: pointer;
    font-family: arial;
    }
   .btnAdd{
        grid-column: 1/3;
        display:flex;
        justify-content: center;

   }
`;

export default AddNote;

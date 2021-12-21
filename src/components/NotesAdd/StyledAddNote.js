import Styled from 'styled-components';
import { theme } from '../../StyledMain';

const AddNote = Styled.div`
    padding:3rem ;
    background: ${theme.$primary};
    padding: 1rem;
    margin: 1rem  ;
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,1);
     form{
        display:grid;
        grid-gap: 1rem;
        align-items: center;
        justify-content: center;
        padding:1rem;
    }
    textarea{
        padding:0.4rem
        width:15rem;
        min-width:15rem;
        max-width:15rem;
        height:10rem;
        min-height:10rem;
        max-height:10rem;
        border:3px solid ${theme.$secondary};
        border-radius: 1rem;
        background: ${theme.$primary};
        color: ${theme.$pre};
        :focus{
            outline:none;
        }
    }
    .textContent{
        grid-row: 2/3;
        border:none
    }
    label{
        display:flex;
        align-items: center;
        padding:1rem;
        border-bottom: 2px solid ${theme.$secondary};
    }
    input{
    border: none;
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
   .btnAdd{
        grid-column: 1/3;
        display:flex;
        justify-content: center;

   }
   select {
       border:none;
       text-align:center;
       background: ${theme.$primary};
       color:${theme.$pre};
       padding: 0.8rem;
        width:15rem;
        font-size: 1rem;
       :focus{
              outline:none;
       }
       :active{
           color:${theme.$pre};
       }
   }
   .inputGroup{
         display:flex;
         flex-direction:column;
         justify-content:right;
         align-items:right;
   }
   button{
    background: fixed;
    border: none;
    margin: 0.3rem;
    border-bottom: 2px solid ${theme.$secondary};
    font-size: 2rem;
    color: ${theme.$pre};
    :hover {
      border-bottom: 2px solid  #fff;
      transition: all 0.2s ease-in-out;
    }
}
    @media (min-width:900px){
        margin:1rem 4rem;
        form{
            grid-template-columns: 1fr 1fr;
        }
        textArea{
            width:40rem;
            min-width:40rem;
            max-width:40rem;
            height:15rem;
            min-height:15rem;
            max-height:15rem;
            
        }
       .textContent{
            grid-column: 2/2;
            grid-row: 1/1;
        }
    }
`;

export default AddNote;

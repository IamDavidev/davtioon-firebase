import Styled from 'styled-components';
import { theme } from '../../StyledMain';

const StyledNotesR = Styled.main`

        background: ${theme.$primary};
        margin:1rem 2rem;
        border-radius: 1rem;
        padding-bottom: 3rem;
        color: ${theme.$tertiary};
        .notesRender{
            margin:1rem;
        }
.swiper {
  width: 10rem;
  height: 18rem;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
   font-size: 10px;
  color: #fff;
  padding: 0.5rem;
}

.swiper-slide:nth-child(odd) {
  background: ${theme.$secondary};
}

.swiper-slide:nth-child(even) {
 background: ${theme.$extra};
}
    .btnAdd{
        display:flex;
        background: ${theme.$primary};
        color: ${theme.$secondary};
        justify-content: right;
        align-items: right;
        margin:0 auto;
        margin-right:3rem;
        button{
            background: ${theme.$primary};
            color: ${theme.$pre};
            font-size: 1rem;
            font-weight: bold;
            border:none;
            border-bottom: 2px solid ${theme.$secondary};
        }
    }
    h3{
        font-size: 1rem;
        font-weight: bold;
        padding-top:1rem;
        color: ${theme.$pre};
      }
      .titleI{
        color: #f00
      }
      span{
        font-size: .3rem;
        display:flex;
        justify-content: flex-end;
        padding-top:3rem;

      }
      strong{
        display:flex;
        justify-content:flex-start;
      }
      p{
        font-size: .8rem;  
      }
`;

export default StyledNotesR;

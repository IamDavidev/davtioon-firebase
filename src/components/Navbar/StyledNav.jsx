import Styled from 'styled-components';
import { theme } from '../../StyledMain';
const StyledNav = Styled.nav`
        color: white;
        background-color: ${theme.$primary};      
        display: flex;
        align-items: center;
        img{
        width: 25px;
        padding-left: 20px;
        }        
        a{
                color: ${theme.$pre};
                display: flex;
                text-decoration:none;
        }     
        ul{
                display: flex;
                list-style: none;
                margin:0px;
                padding:0px;
        li{
                margin-left: 5px;
                list-style: none;
        }
        .navbarLinks{
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
        }
        .navAuth{
                padding-right: 20px;
        }
        
`;

export default StyledNav;
3
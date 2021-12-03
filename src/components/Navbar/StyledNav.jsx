import Styled from 'styled-components';

const StyledNav = Styled.nav`
        color: white;
        background-color: #2c3e50;      
        display: flex;
        align-items: center;
        img{
        width: 25px;
        }        
        a{
                color: white;
                display: flex;
        }     
        ul{
                display: flex;
                list-style: none;
        }
        li{
                margin-left: 10px;
        }
        .navbarLinks{
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
        }
        
        
`;

export default StyledNav;

import styled from 'styled-components';

export const NavbarContainer = styled.nav` 
    background-color: black;
    font-size:22px; 

   .navbar-brand {
        color:orange;
        font-size:24px;
        letter-spacing:5px;
    }

    a {
        color:white;
    }
    .active{
        color:orange;
    }
    a:hover {
        color:orange
    }

    span.navbar-toggler-icon{
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(255,255,255)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
    }

`

export const ImageContainer = styled.img`
    width:32px;
    height:32px;
    margin-right:10px;
`;
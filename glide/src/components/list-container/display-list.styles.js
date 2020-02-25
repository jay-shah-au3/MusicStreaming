import styled from 'styled-components';

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
`;

export const TitleContainer = styled.div`
    font-size:24px;
`;
export const ArtistContainer = styled.div`
    font-size:1em;
`;


export const ListContainer = styled.ol`
    list-style-type:none;
    overflow-x:hidden;
    margin-top:30px;
    padding:0px;
    a{
        text-decoration:none;     
        color:orange;   
        display:flex;
    }
    li:hover{
        background-color:white;
        color:orange;        
    }
    li:hover ${TextContainer} {
        background-color:white;
    }
    li:hover ${TitleContainer}{
        background-color:white;
    }
    li:hover ${ArtistContainer}{
        background-color:white;
        i{
            background-color:white;
        }
    }
    li {
        hr{
            margin:0px;
        }
    }
`;

export const ImageContainer = styled.img`
    width:100px;
    height:100px;
`;

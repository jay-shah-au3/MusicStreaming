import styled from 'styled-components';

export const FormContainer = styled.form`
    display:flex;
    height:8vh;
`;

export const SearchBox = styled.input`
    width:88vw;
    font-size:22px;
    padding-left:5px;
    color:white;
    &::placeholder{
        color:orange;
    }    
    border:1px solid orange;
    border-right:none;
    @media (max-width:768px) {
        width:70vw;
    }    
`; 

export const SearchButton = styled.button`
    cursor:pointer;
    border:none;
    color:white;
    background-color:orange;
    font-size:22px;
    width:12vw;
    &:focus{
        outline:none;
    }
    &:hover{
        color:black;
        background-color:white;
    }
    @media (max-width:768px) {
        width:30vw;
    }    
`;

export const RadioContainer = styled.div`
    display:flex;
    width:100%;
    justify-content:center;    
    margin-top:3%;
    @media (max-width:368px) {
        justify-content:space-around
    }    
`;

export const RadioLabel = styled.label`
    cursor: pointer;
    width:30vw;
    color:white;
    font-size:26px;
    padding-left:10px;
    color:orange;
    @media (max-width:368px) {
        padding-left:0px;
    }
`;

export const RadioButton = styled.input`
    -ms-transform: scale(2.5); /* IE 9 */
    -webkit-transform: scale(2.5); /* Chrome, Safari, Opera */
    transform: scale(2.5);
    cursor: pointer;
    margin-right:15px;
    color:orange;
    @media (max-width:368px) {
        margin-right:10px;
    }    
`;
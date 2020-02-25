import styled from 'styled-components';

export const TagCollectionContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:space-between;
`;

export const BackgroundContainer = styled.div`
    width:100%;
    height:200px;
    background-color:black;
    cursor:pointer;
`;

export const OverlayContainer = styled.div`
    transition: .5s ease;
    opacity: 1;
    color:white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    font-weight:bold;
    font-size:1.5em;

    @media (max-width:700px) {
        font-size:10px;
    }
`

export const TagContainer = styled.div`
    // display:flex;
    position:relative;
    width:30%;
    padding:10px;
    a {
        color:black;
    }
    &:hover ${BackgroundContainer} {
        opacity:0.2;        
    }

    &:hover ${OverlayContainer} {
        opacity:;
        background-color:white;
        padding:5px;
        border:2px solid black;
        font-weight:bold;
        font-size:2em;
        color:black;
        @media (max-width:700px) {
            font-size:16px;
        }

    }
`;
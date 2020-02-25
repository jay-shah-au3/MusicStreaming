import styled from 'styled-components';

export const ArtistCollectionContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:space-between;
`;

export const ImageContainer = styled.img`
    width:100%;
    cursor:pointer;
`;

export const OverlayTextContainer = styled.div`
    transition: .5s ease;
    opacity: 0;
    background:none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
`

export const ArtistCardContainer = styled.div`
    // display:flex;
    position:relative;
    width:30%;
    padding:10px;
    a {
        color:white;
    }
    &:hover ${ImageContainer} {
        opacity:0.3;        
    }

    &:hover ${OverlayTextContainer} {
        opacity:1;
        font-weight:bold;
        font-size:1.5em;

        @media (max-width:700px) {
            font-size:10px;
        }

    }
`;

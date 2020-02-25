import styled from 'styled-components';

// export const StreamingVideoContainer = styled.div`
//     iframe {
//         height:100vh;
//         width:100vw;    
//     }
// `

export let MusicCategoriesContainer = styled.div`
    display:flex;
    flex-wrap:wrap;    
    justify-content:space-around;    
    margin-top:30px;
`;
export const MusicSections = styled.section`
    display:flex;
    justify-content: center;
    align-items: center;    
    flex-wrap:wrap;    
    width:35%;
    color:white;
    margin-bottom:20px;
    background: -webkit-linear-gradient(to right, #c02425, #f0cb35); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #c02425, #f0cb35);
    height: 300px;
    border-radius:150px;
    @media (max-width: 768px){
        width:100%;
        height:250px;
        margin-left:5%;        
        margin-right:5%;
    }
    &:hover {
        background: #00bf8f;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #001510, #00bf8f);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #001510, #00bf8f); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        // background: #FFB75E;  /* fallback for old browsers */
        // background: -webkit-linear-gradient(to right, #ED8F03, #FFB75E);  /* Chrome 10-25, Safari 5.1-6 */
        // background: linear-gradient(to right, #ED8F03, #FFB75E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        cursor:pointer;
    }
`;

// export const ImageContainer = styled.img`
//     width:100%;
// `;



export const CategoryTitle = styled.div`
    position:absolute;
    font-size:3vw;
    background:none;
    @media (max-width: 768px){
        font-size:10vw;
    }
`
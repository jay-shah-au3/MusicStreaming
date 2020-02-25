import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const DivContainer = styled.div`
    text-align:center;
    svg{
        height:120px;
        width:100vw;
        margin-top:30vh;
    }
`;

const Loader = () => (
    <DivContainer>
        <ReactLoading type="bars" color="orange"/>
    </DivContainer>
);

export default Loader;


import React from 'react'
import styled from 'styled-components';

const StyleHeader = styled.header`
    background: #0F3317;
    height: 16.7vh;
    min-width: 15%;
    align-items: center;
    text-align: center;
    text-shadow: #000 0 0 .2em;
    padding: 10px;
    color: white;
`;

function Header(){
    return(
        <StyleHeader>
            This is the header
        </StyleHeader>
    )
}

export default Header
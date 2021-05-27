import React from 'react'

import styled from 'styled-components';

const StyleFooter = styled.footer`
    background: #0F3317;
    height: 10vh;
    min-width: 120px;
    align-items: center;
    text-align: center;
    text-shadow: #000 0 0 .2em;
    padding: 10px;
    color: white;
`;

function Footer(){
    return(
        <StyleFooter>
            this is the footer
        </StyleFooter>
    )
}

export default Footer

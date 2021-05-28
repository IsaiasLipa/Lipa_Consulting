import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar'
import mainLogo from './../images/Facebook.jpg'

const StyleHeader = styled.header`
    background-image: linear-gradient(#28886d,#2f3c5c);
    height: 20vh;
    min-width: 15%;
    font-wight:bold;
    display: flex;
    flex: 0 1 auto;
    text-align: center;
`;


function Header(){
    return(
        <StyleHeader>
            <Navbar/>
            <img src={mainLogo} className={mainLogo} width='auto' height='100%' background-color='white' alt='logo pic'/>
        </StyleHeader>
    )
}

export default Header
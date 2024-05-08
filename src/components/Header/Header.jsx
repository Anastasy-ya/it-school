// import './Header.css';
import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from 'styled-components';
import logo from '../../images/logo.svg';



const SecondaryBackground = styled.header` /*вынести в отдельный модуль */
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  height: 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  margin: 0;

  @media(min-width: 600px) {
    height: 64px;
    padding: 0 68px;
  }

  & img {
    width: 86px;
    height: 16px;
    object-fit: cover;

    @media(min-width: 600px) {
    width: 137px;
    height: 26px;
  }
  }
`

function Header({children}) {



  return (
    // <header className="header">
    <SecondaryBackground>
      <img src={logo} alt="logo"></img>
      {children}
    </SecondaryBackground>

    // </header>
  );
}

export default Header;
import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import styled, { ThemeProvider } from 'styled-components';
import { useResize } from "../../components/hooks/useResize";
import React, { useState, useEffect } from "react";
import GlobalStyle from '../../global/global';
import theme from '../../theme/theme';


function App() {

  const isWide = useResize();

  

  

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="page">

        <Header 
          isWide={isWide}
        >
          
        </Header>
        <Main 
          isWide={isWide}
        />
        <Footer />

      </div>
    </ThemeProvider>
  );
}

export default App;

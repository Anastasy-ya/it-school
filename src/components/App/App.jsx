import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import styled, { ThemeProvider } from 'styled-components';
import { useResize } from "../../components/hooks/useResize";
import React, { useState, useEffect } from "react";
import Burger from '../Burger/Burger';

function App() {

  const theme = {
    colors: {
      mainBackground: 'rgba(217, 217, 217, 1)',
      secondaryBackground: 'rgba(102, 102, 102, 1)',
      blue: 'rgba(51, 153, 255, 1)',
      violet: 'rgba(153, 102, 255, 1)'
    }
  };

  const isWide = useResize();

  const [isOpenPopup, setIsOpenPopup] = React.useState(false);

  function handleOpenClosePopup() {
    setIsOpenPopup(!isOpenPopup);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="page">

        <Header>
          { console.log(isWide)}
          {  isWide ?
            <p>Тут будет кнопка</p> :
            <Burger
              handleOpenClosePopup={handleOpenClosePopup}
              isOpenPopup={isOpenPopup}
            ></Burger>}
        </Header>
        <Main />
        <Footer />

      </div>
    </ThemeProvider>
  );
}

export default App;

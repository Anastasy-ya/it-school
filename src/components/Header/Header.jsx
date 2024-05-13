// import './Header.css';
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import logo from '../../images/logo.svg';
import Burger from '../Burger/Burger';



const StyledHeader = styled.header` /* TODO вынести в отдельный модуль для дублирования стилей в footer */
  height: 33px;
  background-color: ${({ theme }) => theme.colors.secondaryGray};
  padding: 0 16px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media(min-width: 672px) {
    padding: 0 68px;
    height: 64px;
  }
  @media(min-width: 952px) {
    padding: 0 160px;
  }

  & div {
    max-width: 960px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* display: inline-flex; */
  }

  & img {
    width: 86px;
    height: 16px;
    object-fit: cover;

    @media(min-width: 672px) {
    width: 137px;
    height: 26px;
    }
  }
`;



function Header(props) {

  const [isOpenPopup, setIsOpenPopup] = React.useState(false);

  function handleOpenClosePopup() {
    setIsOpenPopup(!isOpenPopup);
  }

  return (
    <StyledHeader>
      <div>
        <img src={logo} alt="logo"></img>
        {props.isWide ?
          <p>Тут будет кнопка</p> :
          <Burger
            handleOpenClosePopup={handleOpenClosePopup}
            isOpenPopup={isOpenPopup}
          ></Burger>}
      </div>
    </StyledHeader>
  );
}

export default Header;
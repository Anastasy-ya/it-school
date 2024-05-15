import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import logo from '../../images/logo.svg';
import Burger from '../Burger/Burger';
import { StyledButton } from '../StyledButton/StyledButton';
import useFormWithValidation from "../hooks/usevalidate"; //TODO вынести на верхний уровень

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

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleOpenClosePopup() {
    setIsOpenPopup(!isOpenPopup);
  }

  return (
    <StyledHeader>
      <div>
        <img src={logo} alt="logo"></img>
        {props.isWide ?
          <StyledButton
            $width='150px'
            $height='25px'
            type='submit'
            aria-label='Записаться'
            disabled={false}
          >
            ЗАПИСАТЬСЯ
          </StyledButton> :
          <Burger
            handleOpenClosePopup={handleOpenClosePopup}
            isOpenPopup={isOpenPopup}
          ></Burger>}
      </div>
    </StyledHeader>
  );
}

export default Header;
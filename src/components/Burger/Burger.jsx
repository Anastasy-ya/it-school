import React, { useState, useEffect } from "react";
import styled from 'styled-components';

// разобраться почему происходит переход свойств от родительского див, 
// переделать в див
const Div = styled.nav`
  width: 16px;
  height: 16px;
  position: relative;
  transition-duration: 0.25s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0;  
  margin: 0;

  @media(min-width: 672px) {
    width: 26px;
  }
`
const Span = styled.span`
  /*средний штрих*/
  height: 2px;
  width: 26px;
  background: ${props =>
    props.$isOpenPopup ? 'transparent' : 'white'
  };
  position: absolute;
  transition-duration: 0.25s;
  transition-delay: 0.25s;
  transition: scale 0.25s, top 0.25s 0.25s;

  /*верхний штрих*/
  &:before {
    position: absolute;
    content: "";
    height: 2px;
    width: 26px;
    background-color: white;
    transition: transform 0.25s, top 0.25s 0.25s;
    ${props => (
    props.$isOpenPopup ? {
      transition: 'top 0.25s, transform 0.25s 0.25s',
      transform: 'rotateZ(-45deg)',
      color: 'red',
      top: '0',
    } : { top: '-6px' }
  )}
  }

  /*нижний штрих*/
  &:after {
    position: absolute;
    content: "";
    height: 2px;
    width: 26px;
    background-color: white;
    transition: transform 0.25s, top 0.25s 0.25s;
    ${props => (
    props.$isOpenPopup ? {
      transition: 'top 0.25s, transform 0.25s 0.25s',
      transform: 'rotateZ(45deg)',
      color: 'red',
      top: '0',
    } : {
      top: '6px',
    }
  )}
  }
`;

function Burger(props) {

  return (
    <Div
      onClick={props.handleOpenClosePopup}
    >
      <Span
        $isOpenPopup={props.isOpenPopup}
      />
    </Div>
  );
}

export default Burger;
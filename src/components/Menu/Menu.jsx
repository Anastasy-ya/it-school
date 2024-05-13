import styled from 'styled-components';
import React, { useState, useEffect } from "react";
import { Section, Box } from '../Section/Section';

const MenuSection = styled.nav`
  height: 48px;
  max-width: 960px;
  margin: 0;
  width: 100%;
  /* padding: 0 160px; */
  padding: 0 160px;
  /* box-sizing: border-box; */


  
  & ul {
    width: 100%;
    height: 40px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(auto, auto));
    grid-auto-flow: column;
    max-width: 960px;
  }

  & li {
    color: ${({ theme }) => theme.colors.secondaryGray};
    line-height: 40px;
    text-align: center;
    white-space: nowrap;
  }

  & a {
    text-align: center;
  }
`;

function Menu() {



  return (
    <Section backgroundColor={({ theme }) => theme.colors.mainBackground}>
      {/* <Box> */}
      <MenuSection>
      {/*TODO вынести в массив вконстанты, пройтись функцией map для отображения */}
        <ul>
          <li>
          {/*ссылки */}{/* <a href="#home">Home</a> */}
            СМЕНЫ
          </li>
          <li>
            ФОРМАТЫ
          </li>
          <li>
            МАСТЕР-КЛАССЫ
          </li>
          <li>
            ЭКСКУРСИИ
          </li>
          <li>
            ПРЕПОДАВАТЕЛИ
          </li>
          <li>
            РАСПИСАНИЕ
          </li>
        </ul>
        </MenuSection>
      {/* </Box> */}
    </Section>
  );
}

export default Menu;
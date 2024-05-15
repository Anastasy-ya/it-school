import styled from 'styled-components';
import React from "react";
import { Box } from '../Section/Section';

const NavBackground = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  align-items: center;
`;

const MenuSection = styled.div`
  height: 48px;
  max-width: 960px;
  margin: 0;
  width: 100%;

  & ul {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(auto, auto));
    grid-auto-flow: column;
    max-width: 960px;
    align-items: center;
    margin: 0;
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
    <NavBackground>
      <Box>
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
      </Box>
    </NavBackground>
  );
}

export default Menu;
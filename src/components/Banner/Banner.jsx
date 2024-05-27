import styled from 'styled-components';
import React from "react";
import { Section, Box } from '../Section/Section';
import Card from '../Card/Card';
import logoKamin from '../../images/logo-kamin.svg';

import { images } from '../constants/constants';


const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  & img {
    width: 122px;
    height: 38px;
    object-fit: cover;
    padding: 12px 0 0 ;

    @media(min-width: 672px) {
      width: 140px;
      /* height: 38px; */
    }
   }

  & div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  & h1 {
    font-weight: 700;
    font-size: 32px;
    text-align: center;
    max-width: 256px;
    text-transform: uppercase;

    @media(min-width: 672px) {
      max-width: 608px;/*616 delme*/
      font-size: 40px;
    }

    @media(min-width: 952px) {
      text-align: left;
      font-size: 52px;
    }
  }

  & h6 {
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    max-width: 182px;

    @media(min-width: 672px) {
      max-width: 608px;

    }
  }
`

const StyledBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1007px;
  padding: 50px 0 50px;
  gap: 50px;
  box-sizing: border-box;

  @media(min-width: 672px) {
    height: 672px;
  }
  @media(min-width: 1136px) {
    height: 528px;
  }

  & h2 {
    font-weight: 700;
    font-size: 12px;
    text-align: center;
    max-width: 270px;
    line-height: 18px;
    text-transform: uppercase;

    @media(min-width: 672px) {
      font-size: 18px;
      max-width: 608px;/*max-width загнать в переменные и подмешать стили */
    }
    @media(min-width: 1136px) {
      
    }
  }
`;

const CardsContainer = styled.ul`
  display: flex;
  padding: 0;
  row-gap: 32px;
  /* column-gap: 24px; */
  flex-wrap: wrap;
  justify-content: space-between;/* center*/
  align-content: center;
  max-width: 256px;
  
  @media(min-width: 672px) {
    max-width: 608px;
  }
  @media(min-width: 952px) {
    max-width: 960px;
  }
`;


function Banner() {

  return (
    <Section 
      $backgroundImage={({ theme }) => theme.colors.gradient}>
      <Box>

        <StyledBanner>

          <StyledTitle>
            <h1>
              ЛЕТНЯЯ IT&#8209;ШКОЛА
            </h1>
            <div>
              <img alt="logo" src={logoKamin} title='logo'/>
              <h6>
                Курсы и подготовка к экзаменам!
              </h6>
            </div>
          </StyledTitle>

          <h2>
            УЧЕБНЫЙ МОДУЛЬ ЗА&nbsp;3&nbsp;НЕДЕЛИ,
            ВМЕСТО 3-Х МЕСЯЦЕВ
            В&nbsp;ОБЫЧНОМ ФОРМАТЕ ОБУЧЕНИЯ!
          </h2>

          <CardsContainer>

            {images.map((image) => (
              <li key={image.id}>
                <Card
                  alt='icon'
                  src={image.name}
                  subtitle={image.subtitle}
                  title={image.title}></Card>
              </li>
            ))}

          </CardsContainer>
        </StyledBanner>

      </Box>
    </Section>
  );
}

export default Banner;
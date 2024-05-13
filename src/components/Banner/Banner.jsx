import styled from 'styled-components';
import React, { useState, useEffect } from "react";
import { Section, Box } from '../Section/Section';
import Card from '../Card/Card';
import logoKamin from '../../images/logo-kamin.svg';
import laptopIcon from '../../images/laptop-icon.svg';
import paletteIcon from '../../images/palette-icon.svg';
import movieIcon from '../../images/movie-icon.svg';
import busIcon from '../../images/bus-icon.svg';
import coffeeIcon from '../../images/coffee-icon.svg';
import moneyIcon from '../../images/money-icon.svg';





const images = [ //TODO перенести в константы
  {
    name: laptopIcon,
    id: 1,
    title: 'ОБУЧЕНИЕ',
    subtitle: `с понедельника 
по четверг`,
  },
  {
    name: paletteIcon,
    id: 2,
    title: 'МАСТЕР-КЛАССЫ',
    subtitle: `от профессионалов`,
  },
  {
    name: movieIcon,
    id: 3,
    title: 'РАЗВЛЕЧЕНИЯ',
    subtitle: `отдых после занятий`,
  },
  {
    name: busIcon,
    id: 4,
    title: 'ЭКСКУРСИИ',
    subtitle: `по пятницам`,
  },
  {
    name: coffeeIcon,
    id: 5,
    title: 'ОБЕДЫ',
    subtitle: `В «Крыльях»
и «Гончаров»`,
  },
  {
    name: moneyIcon,
    id: 6,
    title: 'ОТ 11 000 ₽',
    subtitle: `За 3-х
недельную смену`,
  }
];



const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
    
  @media(min-width: 672px) {
    /* height: 672px; */
  }

  & img {
    width: 122px;
    height: 38px;
    object-fit: cover;
    padding: 12px 0 0 ;
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

    @media(min-width: 672px) {
      max-width: 616px;
    }
  }

  & h6 {
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    max-width: 182px;

    @media(min-width: 672px) {
      /* max-width: 182px; */
    }
    @media(min-width: 952px) {
      /* max-width: 182px; */
    }
  }
`

const StyledBanner = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  height: 1023px;
  padding: 50px 0 50px;
  gap: 50px;

  @media(min-width: 672px) {
    height: 672px;
  }
  @media(min-width: 1136px) {
    height: 528px;
  }

  & h2 {
    font-weight: 600;
    font-size: 12px;
    text-align: center;
    max-width: 270px;
    line-height: 18px;

    @media(min-width: 672px) {
    /* height: 672px; */
    }
    @media(min-width: 952px) {
      /* height: 528px; */
    }
    
  }

  
`;

const CardsContainer = styled.ul`
  display: flex;
  /* padding: 78px 0 0; */
  row-gap: 30px;
  column-gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  /* min-height: 873px; */
  justify-content: center;
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
    <Section backgroundImage={({ theme }) => theme.colors.gradient}>{/* ошибка в консоли*/}
      <Box>
        <StyledBanner>
          <StyledTitle>
            <h1>
              ЛЕТНЯЯ IT&#8209;ШКОЛА
            </h1>
            <div>
              <img alt="logo" src={logoKamin} />
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
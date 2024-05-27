
import styled from 'styled-components';
import React, { useState, useEffect } from "react";
import useFormWithValidation from "../hooks/usevalidate";
import { Section } from '../Section/Section';
import boy from '../../images/boyMain.png';
import { StyledButton } from '../StyledButton/StyledButton';
import Checkbox from '../Checkbox/Checkbox';
import { options } from '../constants/constants.jsx';

const StyledForm = styled.form`
    width: 310px;
    height: 500px;
    border-radius: 30px;
    border: 2px white solid;
    margin: 80px 0 0;
    /* padding: 0 0 33px;  */
    box-shadow: inset 0px 0px 15px rgba(0, 0, 0, 0.1);
    z-index: 1;
    padding: 0 0 32px;
    box-sizing: border-box;
    /* нельзя использовать чтобы не выйти за границы области, 
    border-box скрывает мальчика */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;

    & img {
      width: 300px;
      height: 240px;
      position: absolute;
      top: -143px;
      z-index: 3;

      @media(min-width: 672px) {
        order: 2;
      }
    }

    &::before { /*потерялась тень, разобраться с z-index TODO*/
      content: '';
      background-color: white;
      z-index: 0;
      position: absolute;
      /*далее повтор стилей основного элемента, TODO подмешать переменную со стилями*/
      width: 310px;
      height: 500px;
      border-radius: 30px;
    }

    @media(min-width: 672px) {
      width: 608px;
      /* padding: 64px; */
      flex-direction: row;
      &::before {
        width: 608px;
      }
    }

    /* & div {  */
    /* Тень - отдельный элемент, тк тень на прозрачные 
    растровые изображения ложится некорректно*/
      /* width: 300px;
      height: 200px;
      background-color: rgba(0, 0, 0, 1);
      border-radius: 50%;
      filter: blur(30px);
      position: relative;
      top: -150px;
      left: -50px;
      z-index: 2;
      box-sizing: border-box;
    } */
  `;

const Fieldset = styled.fieldset`
  border: none;
  margin: 0;
  padding: 18px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  row-gap: 24px;
  top: 120px;

  @media(min-width: 672px) {
    order: 1;
  }

  & legend {
      color: ${({ theme }) => theme.colors.secondaryGray};
      font-size: 13px;
      line-height: 18px;
      font-weight: 700;
      text-align: center;
      text-transform: uppercase;      
    }

    & div {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    & h1 {
      color: ${({ theme }) => theme.colors.secondaryGray};
      font-size: 10px;
      line-height: 15px;
      font-weight: 700;
      text-align: center;
      max-width: 255px;

      @media(min-width: 672px) {
      text-align: left;
      /* max-width: 608px; */
      }
    }
`;

const Label = styled.label`
    /* width: 100%; */
    height: 50px;
    color: ${({ theme }) => theme.colors.secondaryGray};
    font-size: 10px;
    font-weight: 400;
    line-height: 32px;
    transition: .5s ease;
    position: absolute;
    top: ${props => (props.$top)};
    left: 16px;
    pointer-events: none;

    &:hover {
      /* visibility: visible; */
    } /*TODO подсказки при наведении, сделать выбор нижнего элемента при помощи js */
  `;

const Input = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  background-color: ${props => (props.$back)};
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  color: ${({ theme }) => theme.colors.secondaryGray};
  text-align: center;
`;

const Span = styled.span`
  height: 11px;
  max-width: 200px;
  width: 100%;
  position: absolute;
  top: ${props => (props.$top)};
  color: red;
  font-weight: 400;
  font-size: 8px;
  line-height: 8px;
  z-index: 10;
  box-sizing: border-box;
  text-align: center;
`;

const Select = styled.select` //дублирует инпут, TODO сделать стили переменной и подмешать
  width: 100%;
  height: 50px;
  outline: none;
  border: none;
  background-color: ${props => (props.$back)};
  font-weight: 700;
  font-size: 12px;
  line-height: 13px;
  color: ${({ theme }) => theme.colors.secondaryGray};
  text-align: center;
  appearance: none;
  /* position: absolute;
  top: ${props => (props.$top)}; */
  /* Использовать после нормальной стилизации с js */
`;

const Option = styled.option` //дублирует инпут, TODO сделать стили переменной и подмешать
  background-color: ${props => (props.$back)};
  color: ${({ theme }) => theme.colors.secondaryGray};
  width: 100%;
  height: 32px;
  border: none;
  font-weight: 500;
  font-size: 10px;
  line-height: 13px;
  text-align: center;
  opacity: 0;

  /* &:hover &:focus{
    background-color: black;
  } */
  
  /* Использовать после нормальной стилизации с js */
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    transition: 0.2s ease;
    border: none;
  }
`;

// const BackgroundForm = styled(StyledForm)`
//     background-color: white;
//     z-index: 0;
//     position: absolute;
//   `;

function Form(props) {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();



  const handleSend = (e) => {
    e.preventDefault();
    console.log('Данные отправлены: ', e);
  };

  const [value, setCheckbox] = useState(true);

  return (
    <Section $backgroundColor={({ theme }) => theme.colors.lightGray}>
      {/* <BackgroundForm></BackgroundForm> */}

      <StyledForm
        noValidate
        onSubmit={handleSend}
        name='openDorsForm'>
        <img src={boy} alt='Illustration'></img>
        {/* <div></div> Тень мальчика */}

        <Fieldset>
          <legend>ДЕНЬ ОТКРЫТЫХ ДВЕРЕЙ 16 МАЯ!</legend>
          <h1>
            Вы сможете посмотреть на обустройство школы, познакомиться с преподавателями
            и администраторами, задать свои вопросы.
          </h1>

          <div>

            <Label htmlFor='Имя' $top='0px'>
              Имя
            </Label>
            <Input
              // $top='55px'
              $back={({ theme }) => theme.colors.lightGray}
              id='Имя'
              type='text'
              name='Имя'
              placeholder='Имя'
              // value={value}
              required
              minLength='2'
              maxLength='60'
              pattern='[a-zA-Zа-яА-Я0-9ёЁ_\s\-]+'
              onChange={(e) => handleChange(e)}
            />
            <Span $top='2px'>
              {errors ? errors['Имя'] : ''}
            </Span>

            <Label htmlFor='Телефон' $top='48px'>
              Телефон
            </Label>
            <Input
              // $top='103px'
              $back='white'
              id='Телефон'
              type='tel'
              name='Телефон'
              placeholder='Телефон'
              // value={value}
              required
              minLength='2'
              maxLength='60'
              pattern='^(8|\+7|\+8|7)\d{10}$'
              onChange={(e) => handleChange(e)}
            />
            <Span $top='50px'>
              {errors ? errors['Телефон'] : ''}
            </Span>

            <Label htmlFor='Филиал' $top='96px' id='label'>
              Филиал
            </Label>
            <Select
              // $top='152px'
              $back={({ theme }) => theme.colors.lightGray}
              id='Филиал'
              // type='select'
              name='Филиал'
              required
              onChange={(e) => handleChange(e)}
            >
              {options.map((option) => (
                <Option 
                key={option.id} 
                value={option.value}
                $back={({ theme }) => theme.colors.lightGray}
                >
                  {option.text}
                </Option>
              ))}
            </Select>

          </div>


          <Checkbox
            label="value"
            value={value}
            checked={value}
            onChange={() => setCheckbox(!value)}
            name='Checkbox'
          ></Checkbox>

        </Fieldset>

        <StyledButton
          $width='288px'
          $height='32px'
          type='submit'
          aria-label='Записаться на день открытых дверей'
          disabled={!isValid}
        >
          ЗАПИСАТЬСЯ НА ДЕНЬ ОТКРЫТЫХ ДВЕРЕЙ
        </StyledButton>


      </StyledForm>
    </Section>
  );
}

export default Form;
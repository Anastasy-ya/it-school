
import styled from 'styled-components';
import React, { useState, useEffect } from "react";
import useFormWithValidation from "../hooks/usevalidate";
import { Section } from '../Section/Section';
import boy from '../../images/boyMain.png';
import { StyledButton } from '../StyledButton/StyledButton';
import Checkbox from '../Checkbox/Checkbox';

const StyledForm = styled.form`
    width: 316px;
    height: 500px;
    border-radius: 30px;
    border: 2px white solid;
    margin: 80px 0 0;
    padding: 0;
    box-shadow: inset 0px 0px 15px rgba(0, 0, 0, 0.1);
    z-index: 1;
    /* padding: 0px 16px 32px; 
    нельзя использовать чтобы не выйти за границы области, 
    border-box скрывает мальчика*/
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    & legend {
      color: ${({ theme }) => theme.colors.secondaryGray};
      font-size: 13px;
      line-height: 18px;
      font-weight: 700;
      text-align: center;
      text-transform: uppercase; /*TODO добавить во все текстовые элементы верхнего регистра */
      position: relative;
      top: -25px;
    }

    & h1 {
      color: ${({ theme }) => theme.colors.secondaryGray};
      font-size: 10px;
      line-height: 15px;
      font-weight: 700;
      text-align: center;
      position: relative;
      top: -15px;
      max-width: 255px;
    }

    & img {
      width: 300px;
      height: 240px;
      position: relative;
      top: -135px;
      z-index: 3;
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

    & fieldset {
      border: none;
      margin: 0;
      padding: 0;
      position: relative;
      top: -100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
    }
  `;

const Label = styled.label`
    width: 100%;
    height: 50px;
    color: ${({ theme }) => theme.colors.secondaryGray};
    font-size: 10px;
    font-weight: 400;
    line-height: 32px;
    transition: .5s ease;
    position: absolute;
    top: ${props => (props.top)};
    left: 16px;
    pointer-events: none;
    /* visibility: hidden; */

    &:hover {
      /* visibility: visible; */
    } /*TODO подсказки при наведении, сделать выбор нижнего элемента при помощи js */
  `;

const Input = styled.input`
  width: 100%;
  height: 50px;
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
  /* Использовать после нормальной стилизации с js */
`;

const Option = styled.option` //дублирует инпут, TODO сделать стили переменной и подмешать
  background-color: ${props => (props.back)};
  color: ${({ theme }) => theme.colors.secondaryGray};
  width: 100%;
  height: 32px;
  border: none;
  font-weight: 500;
  font-size: 10px;
  line-height: 13px;
  text-align: center;
  opacity: 0;
  
  /* Использовать после нормальной стилизации с js */
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    transition: 0.2s ease;
    border: none;
  }
`;

const BackgroundForm = styled(StyledForm)`
    background-color: white;
    z-index: 0;
    position: absolute;
  `;

function Form(props) {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const options = [ /*вынести в константы */
    {
      id: 1,
      value: 1
    },
    {
      id: 2,
      value: 2
    },
    {
      id: 3,
      value: 3
    }];

  const handleSend = (e) => {
    e.preventDefault();
    console.log('Данные отправлены: ', e)
  };

  const [value, setCheckbox] = useState(true);

  return (
    <Section $backgroundColor={({ theme }) => theme.colors.mainBackground}>
      <BackgroundForm></BackgroundForm>

      <StyledForm
        noValidate
        onSubmit={handleSend}
        name='openDorsForm'>
        <img src={boy} alt='Illustration'></img>
        {/* <div></div> Тень мальчика */}

        <fieldset>
          <legend>ДЕНЬ ОТКРЫТЫХ ДВЕРЕЙ 16 МАЯ!</legend>
          <h1>
            Вы сможете посмотреть на обустройство школы, познакомиться с преподавателями
            и администраторами, задать свои вопросы.
          </h1>

          <Label htmlFor='Имя' top='44px'>
            Имя
          </Label>
          <Input
            $back={({ theme }) => theme.colors.lightGrey}
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
          <Span $top='55px'>
            {errors ? errors['Имя'] : ''}
          </Span>

          <Label htmlFor='Телефон' top='103px'>
            Телефон
          </Label>
          <Input
            back='white'
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
          <Span $top='99px'>
            {errors ? errors['Телефон'] : ''}
          </Span>

          <Label htmlFor='Филиал' top='152px' id='label'>
            Филиал
          </Label>
          <Select
            $back={({ theme }) => theme.colors.lightGrey}
            id='Филиал'
            type='select'
            name='Филиал'
            placeholder='Филиал'
            // value={value}
            required
            minLength='2'
            maxLength='60'
            onChange={(e) => handleChange(e)}
          >
            {options.map((option) => (
              <Option key={option.id} value={option.value}>
                {option.value}
              </Option>
            ))}
          </Select>

          <Checkbox
            label="value"
            value={value}
            checked={value}
            onChange={() => setCheckbox(!value)}
            name='Checkbox'
          ></Checkbox>

          <StyledButton
            width='288px'
            height='32px'
            type='submit'
            aria-label='Записаться на день открытых дверей'
            disabled={!isValid}
          >
            ЗАПИСАТЬСЯ НА ДЕНЬ ОТКРЫТЫХ ДВЕРЕЙ
          </StyledButton>
        </fieldset>

      </StyledForm>
    </Section>
  );
}

export default Form;
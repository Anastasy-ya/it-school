import React from 'react';
import styled from 'styled-components';
import check from '../../images/check.svg';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  /* margin: 20px 0 30px; */
`;

const Label = styled.label` /*TODO повторяет стили для других label, создать отдельный элемент с пропсами */
  position: relative;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  height: 20px;
  color: ${({ theme }) => theme.colors.secondaryGray};
  font-size: 9px;
  font-weight: 700;
  line-height: 20px;
  /* transition: .5s ease; */
  left: 10px;
  padding: 0 16px;
  box-sizing: border-box;
  /* transition: background-size 4s ease;  */

    &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: -7px;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.lightGray};
    border-radius: 5px;
    transition: background-color .4s ease; 
    background-position: center;
    background-size: 10%;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const Input = styled.input`
  height: 0px;
  width: 0px;
  opacity: 0;
  z-index: -1;
  /* transition: background-size .4s ease; */
  

  &:checked + ${Label}::before {
    background-image: url(${check});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 50%;
    transition: background-color .4s ease;
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

export default function Checkbox({
  value,
  checked,
  onChange,
  name,
  disabled
}) {
  return (
    <div>

    

      <Input
        id="checkbox"
        type="checkbox"
        defaultChecked
        name="checkbox"
      // value={value}
      // disabled={disabled}
      // checked/*del me */
      // checked={checked}
      // onChange={onChange}
      />
      <Label
        htmlFor="checkbox"
        disabled={disabled}>
        Соглашаюсь с политикой конфиденциальности
      </Label>
      {/* <Indicator /> */}


    </div>
  );
}
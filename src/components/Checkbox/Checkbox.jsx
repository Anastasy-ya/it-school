import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0 30px;
`;

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const Label = styled.label` /*TODO повторяет стили для других label, создать отдельный элемент с пропсами */
  position: relative;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  height: 32px;
  color: ${({ theme }) => theme.colors.secondaryGray};
  font-size: 9px;
  font-weight: 700;
  line-height: 32px;
  transition: .5s ease;
  left: 10px;
  padding: 0 16px;
  box-sizing: border-box;
`;


const Indicator = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  position: absolute;
  top: 0em;
  left: -1.6em;
  border-radius: 5px;
  margin: 6px 0;

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 25%;
    left: 25%;
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.blue};;
    border-radius: 50%;
  }

  &::disabled {
    cursor: not-allowed;
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
    <Container>
      <Label htmlFor="checkbox" disabled={disabled}>
        Соглашаюсь с политикой конфиденциальности
        <Input
          id="checkbox"
          type="checkbox"
          name={name}
          value={value}
          disabled={disabled}
          checked={checked}
          onChange={onChange}
        />
        <Indicator />
      </Label>
    </Container>
  );
}
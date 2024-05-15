import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${props => props.$backgroundColor || 'None'};
  background-image: ${props => props.$backgroundImage || 'None'};
`;

export const Box = styled.div`//TODO сделать переменной и подмешивать к контейнеру секции
  padding: 0 16px;
  margin: 0;
  width: 100%;
  max-width: 960px;

  @media(min-width: 672px) {
    padding: 0 68px;
  }
  @media(min-width: 952px) {
    padding: 0 160px;
  }
`;
import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${props => props.$backgroundColor || 'rgba(0, 0, 0, 0);'};
  background-image: ${props => props.$backgroundImage || 'none'};
  margin: 0;
  padding: 0;
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
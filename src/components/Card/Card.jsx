import styled from 'styled-components';
import React from "react";

const Container = styled.div`
  width: 256px;
  display: flex;
  gap: 12px;
`;

const Background = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 15px;
  border: 2px solid white;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const StyledIcon = styled.img`
  max-width: 40px;
  max-height: 40px;
  margin: 0;
  padding: 0;
`;

const TextBlock = styled.div`
  & h3 {
    font-size: 18px;
    font-weight: 400;
    text-align: left;
    margin-bottom: 8px;
  }

  & pre {
    font-size: 16px;
    font-weight: 400;
    white-space: pre-wrap;
    text-align: left;
  }
`;

function Card(props) {

  return (

    <Container>
      <Background>
        <StyledIcon src={props.src} alt='icon'></StyledIcon>
      </Background>
      <TextBlock>
        <h3>{props.title}</h3>
        <pre>{props.subtitle}</pre>
      </TextBlock>
    </Container>
  );
}

export default Card;
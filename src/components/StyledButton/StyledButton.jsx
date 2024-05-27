import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: 10px;
  width: ${props => (props.$width)};
  height: ${props => (props.$height)};
  font-size: 10px;
  line-height: normal;
  font-weight: 700;
  text-align: center;
  z-index: 1;
`;
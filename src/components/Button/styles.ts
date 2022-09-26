import styled from 'styled-components';
import { ButtonProps } from '.';

export const Container = styled.button<ButtonProps>`
  padding: 1.5rem;
  outline: none;
  border-radius: 1.5rem;
  font-family: 'Oswald', sans-serif;
  font-size: 3rem;
  text-transform: uppercase;
  background: white;

  width: 100%;

  ${({ color }) =>
    color === 'white'
      ? `
    background: white;
    color: black;

  `
      : `
  background: black;
  color: white;

  `}
`;

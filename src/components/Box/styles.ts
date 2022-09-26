import styled from 'styled-components';
import media from 'styled-media-query';
import { BoxProps } from '.';

export const Container = styled.div<BoxProps>`
  border: 0.5rem solid #000;
  border-radius: 1.5rem;
  padding: 4.5rem 3rem;
  height: 60rem;
  width: ${({ size }) => size};
  background-color: ${({ color }) => color};

  ${media.lessThan('small')`
    margin-top: 1rem;
    width: 100%;
  `}
`;

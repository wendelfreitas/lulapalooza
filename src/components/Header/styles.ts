import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.header`
  position: fixed;
  display: flex;
  z-index: 5;
  width: 100%;
  background: #53bec8;
  height: 11rem;
  align-items: center;
  justify-content: center;
  color: black;

  > div {
    text-align: center;
  }

  p {
    font-weight: 600;
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }

  ${media.lessThan('medium')`
    display: none;

    > div {
      display: none;
    }
  `}
`;

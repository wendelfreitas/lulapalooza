import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 100%;
  }

  svg {
    margin-top: -10rem;
    width: 60rem;
    height: 60rem;
  }

  ${media.lessThan('small')`
    margin-top: 15rem;
    svg {
      width: 35rem;
      height: 35rem;
    }
  `}
`;

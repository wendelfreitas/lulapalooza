import styled from 'styled-components';
import media from 'styled-media-query';

export const Explanation = styled.p`
  text-align: center;
  font-weight: 700;
  line-height: 3.5rem;
  font-size: 3.2rem;
  padding: 1rem 20rem;
`;

export const Container = styled.section`
  padding-top: 20.5rem;

  img {
    width: 90rem;
    height: 20rem;
  }

  div {
    position: relative;
    margin-bottom: 5rem;
  }

  ${media.lessThan('small')`
    padding-top: 0;
    div {
      margin-bottom: 5rem;
    }

    img {
      margin-top: 2rem;
      width: 30rem;
      height: 10rem;
    }

    width:100%;

  `}
`;

export const LogoContainer = styled.div`
  position: absolute;
  background: transparent;
  margin-left: auto;
  margin-right: auto;
  bottom: 0;
  top: 0;
  margin-top: -38.5rem;
  width: 70rem;

  ${media.lessThan('small')`
   align-items: center;
   justify-content: center;
   display: flex;

    width:100%;
    margin-top: -13.5rem;

  `}
`;

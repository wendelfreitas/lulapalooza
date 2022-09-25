import { Box } from '../../components/Box';
import styled from 'styled-components';

export const Explanation = styled.p`
  text-align: center;
  font-weight: 700;
  line-height: 3.5rem;
  font-size: 3.2rem;
`;

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`
  padding: 21.5rem;

  max-width: 150rem;
  div {
    position: relative;
  }
`;

export const BalloonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem 0;
  position: fixed;

  p {
    position: absolute;
    font-size: 5rem;
    font-weight: 500;
    max-width: 45rem;
    text-align: center;
    line-height: 6rem;
  }
`;

export const BoxWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
`;

export const PinkBox = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 6.5rem;
  line-height: 3rem;

  text-align: center;

  p {
    margin: 2rem 0;

    font-size: 2.5rem;
  }

  b {
    line-height: 3.5rem;
    font-size: 3.5rem;
  }
`;

export const PurpleBox = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;

  color: white;

  h3 {
    margin: 2rem 0;
    font-size: 5rem;
  }

  p {
    margin-top: 2.5rem;
    font-size: 2rem;
    text-align: center;
    line-height: 2.5rem;
  }
`;

export const YellowBox = styled(Box)`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  svg {
    position: relative;
  }

  b {
    position: absolute;
    text-align: center;
    font-size: 3.5rem;
    line-height: 5rem;
    max-width: 25rem;
  }
`;

export const BlackBox = styled(Box)`
  margin-top: 2.5rem;
`;

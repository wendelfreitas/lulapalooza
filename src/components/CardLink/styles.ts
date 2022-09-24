import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffcd00;
  padding: 2.65rem;
  border-radius: 1.5rem;
  border: 0.6rem solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2.5rem 0;
  b {
    font-size: 3.25rem;
    font-weight: 700;
  }

  &:hover {
    cursor: pointer;
  }
`;

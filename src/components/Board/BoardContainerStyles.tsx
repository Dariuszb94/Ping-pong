import styled from 'styled-components';

export const Board = styled.section`
  width: 100%;
  position: relative;
  margin-left: 30px;
  border: 1px solid black;
  height: calc(100vh - 40px);
  box-sizing: border-box;
  @media (max-width: 1000px) {
    height: calc(100vh - 200px);
  }
`;

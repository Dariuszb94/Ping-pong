import styled from 'styled-components';

export const Board = styled.section`
  width: 100%;
  position: relative;
  border-bottom: 12px solid black;
  border-top: 12px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
  height: calc(100vh - 40px);
  box-sizing: border-box;
  @media (min-width: 1001px) {
    margin-left: 30px;
  }
  @media (max-width: 1000px) {
    height: calc(100vh - 200px);
  }
`;

import styled from 'styled-components';

export const Pawn = styled.div<{ position: number }>`
  height: 200px;
  width: 40px;
  background-color: black;
  position: absolute;
  left: 0;
  top: ${(props) => props.position};
`;

import styled from 'styled-components';

export const Pawn = styled.div<{ position: number }>`
  height: 20%;
  width: 3%;
  background-color: black;
  position: absolute;
  right: 0;
  top: ${(props) => props.position}%;
`;

import styled from 'styled-components';

export const Ball = styled.div<{
  ballPositionX: number;
  ballPositionY: number;
}>`
  height: 40px;
  width: 40px;
  background-color: red;
  position: absolute;
  top: ${(props) => props.ballPositionY}%;
  right: ${(props) => props.ballPositionX}%;
  transform: translate(-50%, -50%);
`;

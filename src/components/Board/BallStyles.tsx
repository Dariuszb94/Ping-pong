import styled from 'styled-components';

export const Ball = styled.div<{ ballPositionY: number }>`
  height: 40px;
  width: 40px;
  background-color: red;
  position: absolute;
  top: ${(props) => props.ballPositionY}%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

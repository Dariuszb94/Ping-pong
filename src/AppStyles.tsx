import styled from 'styled-components';

export const ButtonUp = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  width: 100%;
  min-width: 80px;
  height: 80px;
  border-radius: 4px;
  @media (min-width: 1001px) {
    margin-bottom: 8px;
  }
  @media (max-width: 1000px) {
    position: absolute;
    top: 0;
    width: calc(100% - 40px);
    margin-top: 8px;
  }
`;
export const ButtonDown = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  width: 100%;
  min-width: 80px;
  height: 80px;
  border-radius: 4px;
  @media (max-width: 1000px) {
    position: absolute;
    bottom: 0;
    width: calc(100% - 40px);
    margin-bottom: 8px;
  }
`;
export const BoardOuter = styled.div`
  display: flex;
  padding: 20px;
  @media (max-width: 1000px) {
    padding: 100px 20px;
  }
`;

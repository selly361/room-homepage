import styled, { css } from "styled-components";

export const ButtonWrapper = styled.div`
  width: 160px;
  height: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  bottom: 0;
  right: -160px;
`;

export const defaultButtonStyles = css`
  width: 100%;
  height: 100%;
  background: #000000;
  display: grid;
  place-items: center;
  transition: 1s background ease;

  &:hover {
    background: #444444;
  }
`;

export const PrevButton = styled.button`
  ${defaultButtonStyles}
`;

export const NextButton = styled.button`
  ${defaultButtonStyles}
`;

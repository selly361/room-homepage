import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 266px;
  display: flex;
`;

const commonImageStyles = css`
  height: 100%;
  width: 30%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const AboutDarkImg = styled.div`
  ${commonImageStyles}
  background-image: url("images/image-about-dark.jpg");
`;

export const FurnitureArticle = styled.article`
  width: 580px;
  height: 266px;
  padding: 61px 48px 58px 48px;
  display: grid;
  gap: 15px;
`;

export const AboutLightImg = styled.div`
  ${commonImageStyles}
  background-image: url("images/image-about-light.jpg");
`;

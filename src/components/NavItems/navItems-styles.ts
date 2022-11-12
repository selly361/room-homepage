import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  width: 131px;
  gap: 31px;
  align-items: center;
`;

export const NavItem = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  transition: 1s border-color;

  &:hover {
    border-bottom: 2px solid #ffffff;
  }
`;

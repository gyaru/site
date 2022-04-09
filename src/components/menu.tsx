import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "./logo";

const StyledLink = styled(Link)`
  font-family: "Raleway";
  color: #b48ead;
  display: block;
  font-size: 18px;
  text-decoration: none;
  padding-bottom: 15px;

  &:hover {
    color: #8b6e86;
  }

  @media (max-width: 1181px) {
    padding-left: 15px;
    padding-bottom: unset;
  }
`;

const StyledNav = styled.nav`
  overflow-x: hidden;
  box-sizing: border-box;
  @media (min-width: 1182px) {
    position: fixed;
    width: 200px;
    height: 100%;
    padding: 40px 0 0 25px;
  }
  @media (max-width: 1181px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
`;

export default function menu() {
  return (
    <StyledNav>
      <Logo />
      <StyledLink to="/projects">projects</StyledLink>
      <StyledLink to="/about">about</StyledLink>
      <StyledLink to="/archive">archive</StyledLink>
    </StyledNav>
  );
}

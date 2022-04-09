import React from "react";
import "@fontsource/raleway";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-family: "Raleway";
  display: inline-block;
  color: #b48ead;
  font-size: 36px;
  text-decoration: none;
  padding-bottom: 20px;
  @media (max-width: 1181px) {
    padding-bottom: unset;
    font-size: 18px;
  }
`;

const Suffix = styled.h1`
  display: inline-block;
  margin: 0;
  color: #c0c5ce;
  font-size: 36px;
  font-weight: 400;
  @media (max-width: 1181px) {
    font-size: 18px;
  }
`;

export default function logo() {
  return (
    <StyledLink to="/">
      lis
      <Suffix>.sh</Suffix>
    </StyledLink>
  );
}

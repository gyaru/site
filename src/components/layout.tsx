import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Menu from "./menu";
import styled from "styled-components";
import "../styles/global.css";

const StyledLayout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (min-width: 1182px) {
    flex-direction: row;
  }
`;

const StyledBlock = styled.main`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledMain = styled.main`
  box-sizing: border-box;
  padding-top: 41px;
  max-width: 90%;

  @media (max-width: 1181px) {
    padding-top: 10px;
  }
  @media (min-width: 1182px) {
    max-width: 960px;
    min-width: 960px;
    width: 960px;
    margin-left: 200px;
  }
`;

export const PageTitle = styled.h1`
  font-family: "Raleway";
  margin: 0;
  font-size: 30px;
  text-decoration: none;
  padding-bottom: 5px;
  color: #b48ead;
  font-weight: 400;
  @media (max-width: 1010px) {
    font-size: 25px;
  }
`;

const Layout = ({ pageTitle, children }): JSX.Element => {
  console.log(pageTitle);
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <StyledLayout>
      <Menu />
      <StyledBlock>
        <StyledMain>
          {pageTitle !== "Home Page" && <PageTitle>{pageTitle}</PageTitle>}
          {children}
        </StyledMain>
      </StyledBlock>
    </StyledLayout>
  );
};

export default Layout;

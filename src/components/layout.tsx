import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Menu from "./menu";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import "../styles/global.css";

const StyledLayout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1182px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const StyledBlock = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
`;

const StyledMenu = styled.main`
  width: 200px;
  height: 100vh;
  @media (max-width: 1181px) {
    display: none;
  }
`;

const StyledMain = styled.main`
  box-sizing: border-box;
  padding-top: 40px;
  max-width: 90%;
  @media (max-width: 1181px) {
    padding-top: 10px;
  }
  @media (min-width: 1182px) {
    max-width: 960px;
    min-width: 960px;
    width: 960px;
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

// TODO: fix correct types
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
      <StyledMenu />
      <StyledBlock>
        <StyledMain>
          {pageTitle == "Home Page" && (
            <Helmet title={`${data.site.siteMetadata.title}`} defer={false} />
          )}
          {pageTitle !== "Home Page" && (
            <>
              <Helmet
                title={`${data.site.siteMetadata.title} - ${pageTitle}`}
                defer={false}
              />
              <PageTitle>{pageTitle}</PageTitle>
            </>
          )}
          {children}
        </StyledMain>
      </StyledBlock>
    </StyledLayout>
  );
};

export default Layout;

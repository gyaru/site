import * as React from "react";
import Layout, { PageTitle } from "../../components/layout";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import styled from "styled-components";
import codeblock from "../../components/codeblock";

const PostDate = styled(PageTitle)`
  color: #c0c5ce;
  font-size: 15px;
`;

const StyledP = styled.p`
  font-family: "Raleway";
  color: #2b303b;
  margin: 0 0 17px;
  font-size: 17px;
  line-height: 27px;
`;

const StyledBlockquote = styled.blockquote`
  border-left: 5px solid #b48ead;
  margin: 0 0 0 15px;
  padding: 0 0 0 10px;
`;

const StyledH2 = styled.h2`
  font-family: "Raleway";
  color: #b48ead;
  margin: 0 0 17px;
  font-size: 27px;
  line-height: 27px;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: #8fa1b3;
  box-shadow: 0 1px 0 0 #8fa1b3;
`;

const Snippet = styled.p`
  display: inline;
  background: #eff1f3;
  font-family: "Overpass Mono";
  font-size: 14px;
  padding: 2px;
`;

const Image = styled.img``;

const components = {
  h2: StyledH2,
  p: StyledP,
  blockquote: StyledBlockquote,
  code: codeblock,
  a: StyledA,
  Snippet: Snippet,
  img: Image,
};

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <PostDate>{data.mdx.frontmatter.date}</PostDate>
      <MDXProvider components={components} localImages={Image}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;

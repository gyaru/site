import * as React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

const StyledTitle = styled(Link)`
  font-size: 30px;
  text-decoration: none;
  padding-bottom: 5px;
  color: #b48ead;
`;

const StyledArticle = styled.article`
  font-family: "Raleway";
  color: #2b303b;
  padding-bottom: 15px;
  margin-bottom: 30px;
  box-shadow: 0 1px 0 0 #c0c5ce;
`;

const StyledExcerpt = styled.p`
  font-size: 17px;
  margin: 15px 0 15px 0;
`;

const StyledDate = styled.p`
  margin: 0;
  color: #c0c5ce;
  font-size: 15px;
`;

const StyledTag = styled.p`
  margin: 0;
  color: #c0c5ce;
  font-size: 15px;
  padding-left: 10px;
`;

const MetaData = styled.div`
  display: flex;
`;

function Tag(props: { name: string }) {
  return <StyledTag>#{props.name}</StyledTag>;
}

// TODO: fix correct types
const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home Page">
      {data.allMdx.nodes.map(
        (node: {
          id: React.Key;
          slug: string;
          excerpt: string;
          frontmatter: {
            title: string;
            date: string;
            tags: string[];
          };
        }) => (
          <StyledArticle key={node.id}>
            <StyledTitle to={`/posts/${node.slug}`}>
              {node.frontmatter.title}
            </StyledTitle>
            <StyledExcerpt>{node.excerpt}</StyledExcerpt>
            <MetaData>
              <StyledDate>{node.frontmatter.date}</StyledDate>
              {node.frontmatter.tags.map((node) => (
                <Tag name={node} />
              ))}
            </MetaData>
          </StyledArticle>
        )
      )}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          tags
        }
        id
        slug
        excerpt
      }
    }
  }
`;

export default IndexPage;

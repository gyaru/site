import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";

const StyledTitle = styled(Link)`
  font-size: 15px;
  text-decoration: none;
  color: #b48ead;
  padding-left: 10px;
  padding-right: 5px;
  height: 18px;
`;

const StyledArticle = styled.article`
  font-family: "Raleway";
  color: #2b303b;
  display: flex;
  align-items: baseline;
`;

const StyledDate = styled.p`
  margin: 0;
  color: #c0c5ce;
  font-size: 15px;
  width: 150px;
`;

const StyledTag = styled.p`
  margin: 0;
  color: #c0c5ce;
  font-size: 10px;
  padding-right: 5px;
  height: 18px;
`;

function Tag(props: { name: string }) {
  return <StyledTag>#{props.name}</StyledTag>;
}

const ArchivePage = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="archive">
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
            <StyledDate>{node.frontmatter.date}</StyledDate>
            <StyledTitle to={`/posts/${node.slug}`}>
              {node.frontmatter.title}
            </StyledTitle>
            {node.frontmatter.tags.map((node) => (
              <Tag name={node} />
            ))}
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

export default ArchivePage;

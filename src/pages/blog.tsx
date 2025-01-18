import * as React from "react";
import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import { SEO } from "../components/seo";
import Layout from "../components/layout";

const BlogPage = ({
  data,
}: {
  data: { allFile: { nodes: { name: string }[] } };
}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;

export const Head: HeadFC = () => <SEO title="My Blog Posts" />;

export default BlogPage;

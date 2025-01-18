import * as React from "react";
import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import { SEO } from "../components/seo";
import Layout from "../components/layout";

const BlogPage = ({
  data,
}: {
  data: {
    allMdx: {
      nodes: {
        id: string;
        frontmatter: { title: string; date: string };
        excerpt: string;
      }[];
    };
  };
}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id} className="my-4">
          <h2 className="text-xl text-blue-500 font-bold">
            {node.frontmatter.title}
          </h2>
          <p className="text-sm text-gray-600">
            Posted: {node.frontmatter.date}
          </p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: ASC } }) {
      nodes {
        frontmatter {
          date
          slug
          title
        }
        id
        excerpt
      }
    }
  }
`;

export const Head: HeadFC = () => <SEO title="My Blog Posts" />;

export default BlogPage;

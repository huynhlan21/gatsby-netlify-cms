import * as React from "react";
import { Link, graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import { SEO } from "../../components/seo";
import Layout from "../../components/layout";

const BlogPage = ({
  data,
}: {
  data: {
    allMarkdownRemark: {
      nodes: {
        id: string;
        frontmatter: {
          title: string;
          date: string;
          slug: string;
          description: string;
        };
      }[];
    };
  };
}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMarkdownRemark.nodes.map((node) => (
        <article key={node.id} className="my-4">
          <h2 className="text-xl text-blue-500 font-bold">
            {node.frontmatter.title}
          </h2>
          <p className="text-sm text-gray-600">
            Posted: {node.frontmatter.date}
          </p>
          <p>{node.frontmatter.description}</p>
          <Link
            to={`/blog/${node.frontmatter.slug}`}
            className="text-sm text-blue-500 underline"
          >
            Read more
          </Link>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: ASC } }) {
      nodes {
        frontmatter {
          date
          title
          slug
          description
        }
        id
      }
    }
  }
`;

export const Head: HeadFC = () => <SEO title="My Blog Posts" />;

export default BlogPage;

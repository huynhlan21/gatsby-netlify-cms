import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import { SEO } from "../../components/seo";

interface BlogPostData {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
    };
  };
}

const BlogPost = ({
  data,
  children,
}: {
  data: BlogPostData;
  children: React.ReactNode;
}) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p className="text-sm text-gray-600">{data.mdx.frontmatter.date}</p>
      {children}
      <Link to="/blog" className="text-sm text-blue-500 underline">
        Back
      </Link>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }, frontmatter: {}) {
      frontmatter {
        date
        title
      }
    }
  }
`;

export const Head = ({ data }: { data: BlogPostData }) => (
  <SEO title={data.mdx.frontmatter.title} />
);

export default BlogPost;

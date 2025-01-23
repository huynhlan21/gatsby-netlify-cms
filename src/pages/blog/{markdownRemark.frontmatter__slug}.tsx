import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import { SEO } from "../../components/seo";

interface BlogPostData {
  markdownRemark: {
    frontmatter: {
      title: string;
      date: string;
      hero_image: IGatsbyImageData & { relativePath: string };
      hero_image_alt: string;
      hero_image_credit_text: string;
      hero_image_credit_link: string;
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
  const image = getImage(data.markdownRemark.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.markdownRemark.frontmatter.title}>
      <p className="text-sm text-gray-600">
        {data.markdownRemark.frontmatter.date}
      </p>
      {children}
      {image && (
        <GatsbyImage
          image={image}
          alt={data.markdownRemark.frontmatter.hero_image_alt}
        />
      )}
      <p>
        Photo Credit:{" "}
        <a
          href={data.markdownRemark.frontmatter.hero_image_credit_link}
          target="_blank"
          className="text-blue-500 underline"
        >
          {data.markdownRemark.frontmatter.hero_image_credit_text}
        </a>
      </p>
      <Link to="/blog" className="text-sm text-blue-500 underline">
        Back
      </Link>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date
        hero_image {
          childImageSharp {
            gatsbyImageData(width: 300)
          }
        }
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
      }
    }
  }
`;

export const Head = ({ data }: { data: BlogPostData }) => (
  <SEO title={data.markdownRemark.frontmatter.title} />
);

export default BlogPost;

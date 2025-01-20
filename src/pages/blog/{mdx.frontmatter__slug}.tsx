import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import { SEO } from "../../components/seo";

interface BlogPostData {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
      hero_image: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
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
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p className="text-sm text-gray-600">{data.mdx.frontmatter.date}</p>
      {children}
      {image && (
        <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      )}
      <p>
        Photo Credit:{" "}
        <a
          href={data.mdx.frontmatter.hero_image_credit_link}
          target="_blank"
          className="text-blue-500 underline"
        >
          {data.mdx.frontmatter.hero_image_credit_text}
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
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: { data: BlogPostData }) => (
  <SEO title={data.mdx.frontmatter.title} />
);

export default BlogPost;

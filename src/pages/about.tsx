import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { SEO } from "../components/seo";
import Layout from "../components/layout";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="About page">
      <p>Hi there! I build this site with Gatsby follow its tutorial.</p>
      <StaticImage
        alt="The flower that best decribes my name"
        src="../images/orchird.jpg"
      />
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <SEO title="About Page" description="A short description about me" />
);

export default AboutPage;

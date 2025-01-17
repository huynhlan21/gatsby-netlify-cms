import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { SEO } from "../components/seo";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>About page</h1>
      <Link to="/">Back to home</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  );
};

export const Head: HeadFC = () => <SEO title="About Page" />;

export default AboutPage;

import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { SEO } from "../components/seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/about">About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  );
};

export const Head: HeadFC = () => <SEO />;

export default IndexPage;

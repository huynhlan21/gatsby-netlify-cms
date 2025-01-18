import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { SEO } from "../components/seo";
import Layout from "../components/layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Home page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export const Head: HeadFC = () => <SEO />;

export default IndexPage;

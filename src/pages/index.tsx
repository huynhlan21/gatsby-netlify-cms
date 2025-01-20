import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { SEO } from "../components/seo";
import Layout from "../components/layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Home page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src="https://plus.unsplash.com/premium_photo-1670356694379-703d10403965?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Clifford, a reddish-brown pitbull"
      />
    </Layout>
  );
};

export const Head: HeadFC = () => <SEO />;

export default IndexPage;

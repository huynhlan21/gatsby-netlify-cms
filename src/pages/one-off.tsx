import React from "react";
import type { HeadFC } from "gatsby";
import { SEO } from "../components/seo";

const OneOffPage = () => {
  return <main>Hello World</main>;
};

export const Head: HeadFC = () => (
  <SEO title="One Off Page">
    <script type="application/ld+json">{JSON.stringify({})}</script>
  </SEO>
);

export default OneOffPage;

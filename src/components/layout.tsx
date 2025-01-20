import React, { ReactNode } from "react";
import { Link } from "gatsby";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css";

const navItems = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  { text: "Blog", link: "/blog" },
];

const Layout = ({
  pageTitle,
  children,
}: {
  pageTitle: string;
  children: ReactNode;
}) => {
  const { title } = useSiteMetadata();

  return (
    <div className={container}>
      <header className={siteTitle}>{title}</header>
      <nav>
        <ul className={navLinks}>
          {navItems.map((navItem) => (
            <li key={navItem.text} className={navLinkItem}>
              <Link to={navItem.link} className={navLinkText}>
                {navItem.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;

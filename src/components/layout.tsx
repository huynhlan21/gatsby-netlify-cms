import React, { ReactNode } from "react";
import { Link } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";

const Layout = ({
  pageTitle,
  children,
}: {
  pageTitle: string;
  children: ReactNode;
}) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          {[
            { text: "Home", link: "/" },
            { text: "About", link: "/about" },
          ].map((navItem) => (
            <li className={navLinkItem}>
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

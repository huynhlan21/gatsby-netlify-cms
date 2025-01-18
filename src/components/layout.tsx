import React, { ReactNode } from "react";
import { Link } from "gatsby";

const Layout = ({
  pageTitle,
  children,
}: {
  pageTitle: string;
  children: ReactNode;
}) => {
  return (
    <div>
      <nav>
        <ul className="underline font-semibold text-blue-500">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;

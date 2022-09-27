import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
         <a className="text-decoration-none"> Next.js App</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item me-2">
              <Link className="nav-link" href="/">
               <a className="text-decoration-none text-black"> Home</a>
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link" href="/about">
              <a className="text-decoration-none text-black"> About</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

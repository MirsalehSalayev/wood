import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./_header.scss"

const Header = ({ title, prevLink, prevPage, currentLink, currentPage }) => {
  return (
    <header className="header">
      {/* <div className="header-filter"> */}
      <Navbar />
      <div className="header-content">
        <h1>{title}</h1>
        <div className="links-header">
          <Link className="link-header" to={prevLink}>
            {prevPage}
          </Link>
          <Link className="link-header" to={prevLink}>
            <i className="fa-light fa-arrow-right"></i>
          </Link>
          <Link className="link-header" to={currentLink}>
            {currentPage}
          </Link>
        </div>
      </div>
      {/* </div> */}
    </header>
  );
}

export default Header;

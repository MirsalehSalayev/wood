import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import NavbarHeading from "../../components/HeaderNav";
import "./_navbar.scss"

function Navbar() {
  const [stickyNav, setStickyNav] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setStickyNav(true) : setStickyNav(false);
    }
  };
  function hideSubMenu() {
    document.body.onclick = () => {
      setShowSubMenu(false);
    };
  }
  return (
    <>
      <NavbarHeading />
      <nav className={`nav ${stickyNav ? "fixed" : ""} `}>
        <div className="navbar">
          <div className="logo">
            {stickyNav ? (
              <img
                src="https://preview.colorlib.com/theme/woodrox/img/logo-2.png"
                alt="logo"
              />
            ) : (
              <img
                src="https://preview.colorlib.com/theme/woodrox/img/logo.png.webp"
                alt="logo"
              />
            )}
          </div>
          <div className="navigation">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={`link ${stickyNav ? "colored-link" : ""} `}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={`link ${stickyNav ? "colored-link" : ""} `}
                >
                  ABOUT
                </NavLink>
              </li>
              <li>
                <Link
                  onMouseOver={() => {
                    setShowSubMenu(true);
                    hideSubMenu();
                  }}
                  className={`link ${stickyNav ? "colored-link" : ""} `}
                >
                  PAGES
                </Link>
                <div
                  className={showSubMenu ? "project-page-show" : "project-page"}
                >
                  <NavLink to="/projects" className="submenu-item">
                    PROJECT
                  </NavLink>

                </div>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={`link ${stickyNav ? "colored-link" : ""} `}
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

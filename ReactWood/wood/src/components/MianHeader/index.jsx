import React from "react";
import Navbar from "../../layout/Navbar";
import "./_mainHead.scss"

const MianHeader = () => {
  return (
    <header className="header-home">
      <Navbar />
      <div className="header-home-content">
        <div
          className="header-home-content-text"
        >
          <h1>PRECISE CONCEPT DESIGN FOR STYLISH LIVING</h1>
          <p>
            If you are looking at blank cassettes on the web, you may be very
            confused at the difference in price. You may see some for as low as
            $.17 each.
          </p>
          <button>
            <a href="#">Get Started</a>
          </button>
        </div>
        <div className="header-home-content-icons">
          <div className="header-home-content-icon" style={{ borderRight: "1px solid rgba(255, 255, 255, 0.1)", borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
            <i className="fa-thin fa-couch"></i>
          </div>
          <div className="header-home-content-icon" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
            <i className="fa-thin fa-bed-front"></i>
          </div>
          <div className="header-home-content-icon" style={{ borderRight: "1px solid rgba(255, 255, 255, 0.1)", borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
            <i className="fa-thin fa-sink"></i>
          </div>
          <div className="header-home-content-icon" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
            <i className="fa-thin fa-kitchen-set"></i>
          </div>
          <div className="header-home-content-icon" style={{ borderRight: "1px solid rgba(255, 255, 255, 0.1)" }}>
            <i className="fa-thin fa-bed-front"></i>
          </div>
          <div className="header-home-content-icon">
            <i className="fa-thin fa-couch"></i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MianHeader;

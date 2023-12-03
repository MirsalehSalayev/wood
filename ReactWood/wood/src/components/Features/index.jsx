import React from "react";
import "./_features.scss"
function Features() {
  return (
    <section id="features">
      <div className="features-container">
        <h1>SOME FEATURES THAT MADE US UNIQUE</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <div className="features-cards">
          <div className="features-card">
            <div className="features-card-heading">
              <i className="fa-light fa-user"></i>
              <span>EXPERT TECHNICIANS</span>
            </div>
            <p>
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>
          <div className="features-card">
            <div className="features-card-heading">
              <i className="fa-light fa-newspaper"></i>
              <span>PROFESSIONAL SERVICE</span>
            </div>
            <p>
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>
          <div className="features-card">
            <div className="features-card-heading">
              <i className="fa-light fa-phone-rotary"></i>
              <span>GREAT SUPPORT</span>
            </div>
            <p>
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>
          <div className="features-card">
            <div className="features-card-heading">
              <i className="fa-light fa-rocket-launch"></i>
              <span>TECHNICAL SKILLS</span>
            </div>
            <p>
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>
          <div className="features-card">
            <div className="features-card-heading">
              <i className="fa-light fa-gem"></i>
              <span>HIGHLY RECOMENDED</span>
            </div>
            <p>
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>
          <div className="features-card">
            <div className="features-card-heading">
              <i className="fa-light fa-comment"></i>
              <span>POSITIVE REVIEWS</span>
            </div>
            <p>
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

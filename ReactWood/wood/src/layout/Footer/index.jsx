import React from "react";
import "./_footer.scss"
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="aboutFooter">
          <h2>ABOUT ME</h2>
          <p>
            Do you want to be even more successful? Learn to love learning and
            growth. The more effort you put into improving your skills,
          </p>
          <p>
            Copyright ©2023 All rights reserved | This template is made with{" "}
            <i className="fa-light fa-heart"></i> by <span>Colorlib</span>
          </p>
        </div>
        <div className="newsletter">
          <h2>NEWSLETTER</h2>
          <p>Stay updated with our latest trends</p>
          <div className="input">
            <input type="email" placeholder="Enter email address" />
            <button>
              <i className="fa-light fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="follow-footer">
          <h2>FOLLOW ME</h2>
          <p>Let us be social</p>
          <div className="icons-footer">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-dribbble"></i>
            <i className="fa-brands fa-behance"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

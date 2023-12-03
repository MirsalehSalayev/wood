import React from "react";
import Features from "../../components/Features";

import ImgsPro from "../../components/ImgsPro";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import Gifs from "../../components/Titles";

const AboutPage = () => {
  return (
    <>
      <Header title="ABOUT US" prevLink="/" prevPage="Home" currentLink="/about" currentPage="About Us" />
      <ImgsPro />
      <Features />
      <Gifs />
      <Footer />
    </>
  );
}

export default AboutPage;

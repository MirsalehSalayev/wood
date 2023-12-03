import React from "react";
import Footer from "../../layout/Footer";
import ImgsPro from "../../components/ImgsPro";
import Features from "../../components/Features";
import MostPopular from "../../components/MostPopular";
import Gifs from "../../components/Titles";
import MianHeader from "../../components/MianHeader";
const Home = () => {
  return (
    <>
      <MianHeader />
      <MostPopular />
      <ImgsPro />
      <Features />
      <Gifs />
      <Footer />
    </>
  );
}

export default Home;

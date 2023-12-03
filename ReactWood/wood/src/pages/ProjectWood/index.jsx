import React from "react";
import ProjectCo from "../../components/projectCo";

import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

import ImgsPro from "../../components/ImgsPro";

const Project = () => {
  return (
    <>
      <Header
        title="PROJECTS"
        prevLink="/"
        prevPage="Home"
        currentLink="/Project"
        currentPage="Project"
      />
      <ProjectCo />
      <ImgsPro />
      <Footer />
    </>
  );
}

export default Project;

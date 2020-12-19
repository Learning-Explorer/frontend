import React from "react";
import CardsCourses from "../components/CardsCourses";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header></Header>
      <main className="main-container">
        <div>
          <h1>Cursos Terminados</h1>
          <CardsCourses />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;

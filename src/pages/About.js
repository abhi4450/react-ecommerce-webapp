import React, { Fragment } from "react";
import Navigation from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./About.css";

const AboutPage = () => {
  return (
    <Fragment>
      {/* <Navigation /> */}
      <Header />
      <main>
        <h3>This is about page</h3>
      </main>
      <Footer />
    </Fragment>
  );
};

export default AboutPage;

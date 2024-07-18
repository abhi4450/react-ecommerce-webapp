import React, { Fragment } from "react";
import Navigation from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Home.css";

const HomePage = () => {
  return (
    <Fragment>
      {/* <Navigation /> */}
      <Header />
      <main>
        <h3>This is home page</h3>
      </main>
      <Footer />
    </Fragment>
  );
};

export default HomePage;

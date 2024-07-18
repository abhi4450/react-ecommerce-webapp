import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cart from "./components/Cart";
import Navigation from "./components/Navbar";
import HomePage from "./pages/Home";
import StorePage from "./pages/Store";
import AboutPage from "./pages/About";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const closeCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      <Router>
        {cartIsShown && <Cart onClose={closeCartHandler} />}
        <Navigation onShowCart={showCartHandler} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;

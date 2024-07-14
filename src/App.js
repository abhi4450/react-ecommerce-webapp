import React, { Fragment, useState } from "react";
import ProudctList from "./components/ProudctList";
import Cart from "./components/Cart";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./components/Header";



const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const closeCartHanlder = () => {
    setCartIsShown(false);
  };
  const [products, setProducts] = useState(productsArr);
  return (
    <Fragment>
        {cartIsShown && <Cart onClose={closeCartHanlder} />}
      <Header onShowCart={showCartHandler} />
      <Container>
        <Row>
          {products.map((product) => (
            <Col md={6} sm={12} key={product.title}>
              <ProudctList
                id={product.title}
                title={product.title}
                price={product.price}
                image={product.imageUrl}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;

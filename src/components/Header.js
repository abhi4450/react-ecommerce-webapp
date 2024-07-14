import React,{useContext} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import CartContext from "../store/cart-context";
import "./Header.css";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="mx-auto nav-links">
          <div className="max">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#store">STORE</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
          </div>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link>
            <Button variant="light" onClick={props.onShowCart}>
              Cart
              <Badge bg="secondary" className="ms-1">
                {numberOfCartItems}
              </Badge>
            </Button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

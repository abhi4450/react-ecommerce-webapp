import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import "./Header.css";

const Header = (props) => {
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
                0
              </Badge>
            </Button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

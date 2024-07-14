import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ProductList.css";
import CartContext from "../store/cart-context";

const ProductList = (props) => {
  const ctx = useContext(CartContext);

  const item = {
    id: props.id,
    name: props.title,
    price: props.price,
  };
  const addToCartHandler = (amount) => {
    ctx.addItem({
      ...item,
      amount: 1,
    });
  };

  return (
    <Card className="product-card">
      <p className="text-center title display-6">{props.title}</p>
      <Card.Img variant="top" src={props.image} className="product-image" />
      <Card.Body className="d-flex justify-content-between align-items-center product-body">
        <Card.Text className="fs-3 price-text">{`$${props.price}`}</Card.Text>
        <Button
          variant="primary"
          className="add-to-cart-btn"
          onClick={addToCartHandler}
        >
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductList;

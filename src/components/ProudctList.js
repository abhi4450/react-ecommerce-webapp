import React from "react";

import Card from "react-bootstrap/Card";

const ProudctList = (props) => {
  return (
    <Card style={{ width: "18rem", margin:"10px auto" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{`$${props.price}`}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProudctList;

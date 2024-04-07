import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Product = ({ product }) => {
  return (
    <Card className="mb-5">
      <div className="ratio ratio-4x3">
        <Card.Img
          variant="top"
          src={product.image.url}
          alt={product.title}
          className="w-100"
        />
      </div>
      <Card.Body
        className="d-flex flex-column align-items-start justify-content-between"
        style={{ height: "260px", overflow: "hidden" }}
      >
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <div className="mt-auto">
          <Card.Text>Price: ${product.price}</Card.Text>
          <Card.Text>Discounted Price: ${product.discountedPrice}</Card.Text>
        </div>
      </Card.Body>
      <Card.Footer>
        <Link to={`/productPage/${product.id}`}>
          <Button variant="primary">View Product</Button>
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default Product;

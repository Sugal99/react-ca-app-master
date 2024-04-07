import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const CheckoutPage = ({ cart }) => {
  return (
    <Container className="mt-5">
      <h1 className="mb-4">Checkout</h1>
      {cart.map((product) => (
        <Row
          key={product.id}
          className="mb-4 align-items-center border p-3 rounded"
        >
          <Col xs={12} md={4} lg={3}>
            <Image
              src={product.image.url}
              alt={product.title}
              fluid
              thumbnail
            />
          </Col>
          <Col xs={12} md={8} lg={9}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p className="text-muted">Price: ${product.price}</p>
            {/* Add more product details as needed */}
          </Col>
        </Row>
      ))}
      <Row className="justify-content-end">
        <Col xs={12} md={6} lg={4} className="text-center">
          <h4>Total: ${calculateTotal(cart)}</h4>
          <Link to="/checkoutSuccessPage">
            <Button variant="primary" className="w-100">
              Proceed to Checkout
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

const calculateTotal = (cart) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);
  return totalPrice.toFixed(0); // Rounds to the nearest whole number
};

export default CheckoutPage;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const CheckoutSuccessPage = ({ clearCart }) => {
  useEffect(() => {
    // Clear the cart upon component mount
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="mt-5 text-center animate__animated animate__fadeIn">
      <h1>Order Successful!</h1>
      <p>Thank you for your purchase.</p>
      <p>Your order has been successfully processed.</p>
      <p>Your cart has been cleared.</p>
      <Link to="/homePage">
        <Button variant="primary">Back to Store</Button>
      </Link>
    </Container>
  );
};

export default CheckoutSuccessPage;

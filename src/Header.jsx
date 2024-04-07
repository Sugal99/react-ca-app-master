import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartIcon from "./CartIcon";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = ({ cart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  console.log("Cart prop in Header component:", cart); // Log cart prop here

  return (
    <Navbar bg="primary" collapseOnSelect expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          eCom
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/homePage">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/contactPage">
              Contact
            </Nav.Link>
          </Nav>
          <SearchBar products={products} />
          {/* Pass addToCart function and cart state to CartIcon */}
          <Nav.Link as={Link} to="/checkoutPage">
            <CartIcon cart={cart} />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

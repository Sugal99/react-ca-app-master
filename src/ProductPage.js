import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ProductPage = ({ products, addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((product) => product.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      const fetchProduct = async () => {
        try {
          const response = await fetch(
            `https://v2.api.noroff.dev/online-shop/${id}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch product");
          }
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };
      fetchProduct();
    }
  }, [id, products]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Image src={product.image.url} alt={product.title} fluid />
        </Col>
        <Col md={6}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <Button variant="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;

// HomePage.js
import React from "react";
import Product from "./Product"; // Import the Product component
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomePage = ({ products }) => {
  return (
    <div className="product-list ">
      <Row
        xs={1}
        md={2}
        lg={2}
        xl={3}
        className="row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 g-0"
      >
        {" "}
        {/* Remove gutters between columns */}
        {products.map((product) => (
          <Col key={product.id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";

const SearchBar = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
    } else {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredProducts);
    }
  };

  return (
    <div className="position-relative mt-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search products..."
        className="form-control"
      />
      {searchResults.length > 0 && (
        <div
          className="position-absolute start-0 end-0 mt-2"
          style={{ zIndex: 1000, maxHeight: "300px", overflowY: "auto" }}
        >
          <ListGroup>
            {searchResults.map((product) => (
              <ListGroup.Item key={product.id}>
                <Link
                  to={`/productPage/${product.id}`}
                  className="d-flex align-items-center"
                >
                  <Image
                    src={product.image.url}
                    alt={product.title}
                    width="50"
                    height="50"
                    className="me-3 rounded"
                  />
                  {product.title}
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

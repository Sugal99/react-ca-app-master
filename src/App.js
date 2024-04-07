import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import ContactPage from "./ContactPage"; // Import your ContactPage component
import HomePage from "./HomePage"; // Import your ContactPage component
import ProductPage from "./ProductPage"; // Import your ContactPage component
import CheckoutPage from "./CheckoutPage"; // Import your ContactPage component
import CheckoutSuccessPage from "./CheckoutSuccessPage"; // Import your ContactPage component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes instead of Switch
import React, { useEffect, useState } from "react";

const url = "https://v2.api.noroff.dev/online-shop";

function EComStoreApp() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]); // Assuming setCart is the function to update the cart state
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const { data } = await response.json(); // Destructure 'data' from the response
        setProducts(data); // Set the products array from the response
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log("Adding product to cart:", product);
  };
  console.log("Products:", products); // Add console.log here

  console.log("Cart state in EComStoreApp:", cart); // Log cart state here

  return (
    <Router>
      <Layout cart={cart}>
        <Routes>
          <Route path="/homePage" element={<HomePage products={products} />} />
          <Route
            path="/productPage/:id"
            element={<ProductPage products={products} addToCart={addToCart} />}
          />{" "}
          <Route path="/contactPage" element={<ContactPage />} />
          <Route path="/checkoutPage" element={<CheckoutPage cart={cart} />} />
          <Route
            path="/CheckoutSuccessPage"
            element={<CheckoutSuccessPage clearCart={clearCart} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default EComStoreApp;

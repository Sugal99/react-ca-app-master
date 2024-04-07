import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartIcon = ({ cart }) => {
  if (!cart) {
    return null; // Or any fallback content if needed
  }

  // Calculate the total number of items in the cart
  const totalItems = cart.length;

  return (
    <div className="shoppingCartIcon mb-3 ms-1">
      {/* Display totalItems if it's greater than 0 */}
      {totalItems > 0 && <div className="cartItemCount ps-4">{totalItems}</div>}

      {/* Render cart icon */}
      <FontAwesomeIcon icon={faShoppingCart} size="2x" />
    </div>
  );
};

export default CartIcon;

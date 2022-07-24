import { useState } from "react";
import CartContext from "../../context/CartContext";
import "./GlobalStyles.scss";

function GlobalStyles({ children }) {
  const [cart, setCart] = useState([]);

  const getTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    return total;
  };

  return (
    <CartContext.Provider value={{ cart, setCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export default GlobalStyles;

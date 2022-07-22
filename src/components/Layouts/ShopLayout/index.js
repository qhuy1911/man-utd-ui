import { useState } from "react";
import CartContext from "../../../context/CartContext";
import ShopHeader from "../ShopHeader";
import "./ShopLayout.css";

function ShopLayout({ children }) {
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
      <div className="shop-layout_wrap">
        <ShopHeader />
        <div className="container">{children}</div>
      </div>
    </CartContext.Provider>
  );
}

export default ShopLayout;

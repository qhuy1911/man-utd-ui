import ShopHeader from "../ShopHeader";
import "./ShopLayout.css";

function ShopLayout({ children }) {
  return (
    <div className="shop-layout_wrap">
      <ShopHeader />
      <div className="container">{children}</div>
    </div>
  );
}

export default ShopLayout;

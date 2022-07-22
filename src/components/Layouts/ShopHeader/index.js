import { Link } from "react-router-dom";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ShopHeader.css";

function ShopHeader() {
  return (
    <div>
      <div className="shop-header__menu">
        <div className="shop-header__menu_list">
          <Link to={"/"} className="shop-header__link">
            Page News
          </Link>
          <Link to={"/shop/order"} className="shop-header__link">
            Track Order
          </Link>
          <Link to="" className="shop-header__link">
            My Account
          </Link>
        </div>
        <div className="shop-header_div_cart">
          <Link to="/shop/cart" className="shop-header__link">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="shop-header__icon_cart"
            ></FontAwesomeIcon>
            <span className="shop-header__icon_cart_count">0</span>
          </Link>
        </div>
      </div>
      <div className="shop-header__container">
        <Link to={"/shop"} className="shop-header__link_home">
          <img
            className="shop-header__logo"
            src="https://assets.manutd.com/AssetPicker/images/0/0/3/2/197240/Header-Logo1500994616801.png"
            alt="ManUtd"
          />
          <span>UNITED DIRECT</span>
        </Link>
        <div className="shop-header__search">
          <input
            type="text"
            placeholder="Search"
            className="shop-header__search_input"
          />
          <FontAwesomeIcon
            className="shop-header__search_icon"
            icon={faMagnifyingGlass}
          />
        </div>
      </div>
    </div>
  );
}

export default ShopHeader;

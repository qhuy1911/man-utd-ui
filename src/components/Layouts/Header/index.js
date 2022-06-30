import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* Menu */}
        <div className={cx("menu")}>
          <Link to={"/"}>
            <img
              className={cx("menu-logo")}
              src="https://assets.manutd.com/AssetPicker/images/0/0/3/2/197240/Header-Logo1500994616801.png"
              alt="ManUtd"
            />
          </Link>
          <ul className={cx("menu-list")}>
            <li className={cx("menu-item")}>Home</li>
            <Link to={"/shop"} className="navLink">
              <li className={cx("menu-item")}>Shop</li>
            </Link>
            <li className={cx("menu-item")}>About</li>
            <li className={cx("menu-item")}>PLayers</li>
            <li className={cx("menu-item")}>Achievements</li>
          </ul>
        </div>
        {/* Search */}
        <div className={cx("search")}>
          <input
            className={cx("search-input")}
            type="text"
            placeholder="What are you looking for?"
          />
          <FontAwesomeIcon
            className={cx("search-icon")}
            icon={faMagnifyingGlass}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;

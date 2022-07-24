/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import {
  faYoutube,
  faFacebookF,
  faTwitter,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import AuthService from "../../../services/AuthService";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function Footer() {
  const [currentUser, setCurrentUser] = useState();

  const getCurrentUser = () => {
    setCurrentUser(AuthService.getCurrentUser());
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  const onLogout = () => {
    AuthService.logout();
    getCurrentUser();
  };

  return (
    <footer className={cx("wrapper")}>
      {/* Social */}
      <div className={cx("socials")}>
        <ul className={cx("social-list")}>
          <li className={cx("social-item")}>
            <a className={cx("social-link")} href="#" target="_blank">
              <FontAwesomeIcon className={cx("social-icon")} icon={faYoutube} />
            </a>
          </li>
          <li className={cx("social-item")}>
            <a className={cx("social-link")} href="#" target="_blank">
              <FontAwesomeIcon
                className={cx("social-icon")}
                icon={faFacebookF}
              />
            </a>
          </li>
          <li className={cx("social-item")}>
            <a className={cx("social-link")} href="#" target="_blank">
              <FontAwesomeIcon className={cx("social-icon")} icon={faTwitter} />
            </a>
          </li>
          <li className={cx("social-item")}>
            <a className={cx("social-link")} href="#" target="_blank">
              <FontAwesomeIcon
                className={cx("social-icon")}
                icon={faInstagram}
              />
            </a>
          </li>
          <li className={cx("social-item")}>
            <a className={cx("social-link")} href="#" target="_blank">
              <FontAwesomeIcon className={cx("social-icon")} icon={faTiktok} />
            </a>
          </li>
        </ul>
        {currentUser ? (
          <div>
            <button
              className={cx("btn-link", "btn-link-signup", "red-btn")}
              onClick={onLogout}
            >
              Log out
            </button>
          </div>
        ) : (
          <div className={cx("social-buttons")}>
            <Link
              className={cx("btn-link", "btn-link-login", "black-btn")}
              to={"/login"}
            >
              Login
            </Link>
            <Link
              className={cx("btn-link", "btn-link-signup", "red-btn")}
              to={"/register"}
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
      {/* Infomation */}
      <div className={cx("infomations")}>
        <span>©2022 Chuyên đề Web</span>
        <span>Khoa CNTT Trường Đại học Nông Lâm TPHCM</span>
      </div>
    </footer>
  );
}

export default Footer;

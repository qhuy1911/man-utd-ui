import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx("wrapper")}>
      {/* Sponsor */}
      <div className={cx("sponsors")}>
        <div className={cx("inner1")}></div>
      </div>
      {/* Social */}
      <div className={cx("socials")}>
        <div className={cx("inner2")}></div>
      </div>
    </footer>
  );
}

export default Footer;

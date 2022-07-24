import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminHeader.css";
import AuthService from "../../../services/AuthService";

function AdminHeader() {
  let navigate = useNavigate();
  const [showInfo, setShowInfo] = useState(false);

  const onLogout = () => {
    AuthService.logout();
    navigate("/");
  };

  return (
    <div className="admin-header__wrapper">
      <div className="admin-header__logo">
        <Link to={"/"}>
          <img
            className="admin-header__logo-img"
            src="https://assets.manutd.com/AssetPicker/images/0/0/3/2/197240/Header-Logo1500994616801.png"
            alt="ManUtd"
          />
        </Link>
      </div>
      <div className="admin-header__user">
        <div className="admin-header__user-avatar">
          <img
            onClick={() => setShowInfo(!showInfo)}
            src="https://assets.manutd.com/AssetPicker/images/0/0/3/2/197240/Header-Logo1500994616801.png"
            alt="ManUtd"
          />
        </div>
        {showInfo && (
          <div className="admin-header__user-modal">
            <div className="admin-header__user-info">
              <img
                src="https://assets.manutd.com/AssetPicker/images/0/0/3/2/197240/Header-Logo1500994616801.png"
                alt="ManUtd"
              />
              <div className="admin-header__user-name">Admin</div>
            </div>
            <div className="admin-header__user-profile">
              <div>My Profile</div>
            </div>
            <div className="admin-header__user-logout">
              <div onClick={onLogout}>Logout</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminHeader;

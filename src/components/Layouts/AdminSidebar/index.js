import { Link } from "react-router-dom";
import "./AdminSidebar.css";

function AdminSidebar() {
  return (
    <div className="admin-sidebar__wrapper">
      <ul className="admin-sidebar__list">
        <li className="admin-sidebar__item">
          <Link className="admin-sidebar__item-link" to={"/admin/news"}>
            News
          </Link>
        </li>
        <li className="admin-sidebar__item">
          <Link className="admin-sidebar__item-link" to={"/admin/categories"}>
            Categories
          </Link>
        </li>
        <li className="admin-sidebar__item">
          <Link className="admin-sidebar__item-link" to={"/admin/products"}>
            Products
          </Link>
        </li>
        <li className="admin-sidebar__item">
          <Link className="admin-sidebar__item-link" to={"/admin/sizes"}>
            Sizes
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;

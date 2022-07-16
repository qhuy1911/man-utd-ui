import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";
import "./AdminLayout.css";

function AdminLayout({ children }) {
  return (
    <div className="admin-layout__wrapper">
      <AdminHeader />
      <div className="admin-layout__container">
        <AdminSidebar />
        <div className="admin-layout__content">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;

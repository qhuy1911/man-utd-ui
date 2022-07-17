import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryDataService from "../../../services/CategoryDataService";
import "./AdminCategories.css";

function AdminCategories() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = () => {
    CategoryDataService.getAllCategories().then((response) => {
      setCategories(response.data);
      console.log(response.data);
    });
  };

  return (
    <div className="admin-categories__wrapper">
      <h1>Categories</h1>
      <div className="admin-categories__btn">
        <Link to={"add"} className="btn-link red-btn admin-categories__btn-add">
          Add Category
        </Link>
      </div>
      {categories && (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category.id}>
                <td>{index + 1}</td>
                <td>{category.name}</td>
                <td className="table__action">
                  <Link to={`${category.id}`} className="table__action-link">
                    <FontAwesomeIcon icon={faPen} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminCategories;

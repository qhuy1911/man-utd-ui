import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import CategoryDataService from "../../../services/CategoryDataService";
import "./AdminCategories.css";

function Category() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [category, setCategory] = useState();

  useEffect(() => {
    getCategory(id);
  }, [id]);

  const getCategory = (id) => {
    CategoryDataService.getCategory(id).then((res) => {
      setCategory(res.data);
    });
  };

  const updateCategory = () => {
    CategoryDataService.updateCategory(id, category).then((res) => {
      navigate("/admin/categories");
    });
  };

  const deleteCategory = () => {
    CategoryDataService.deleteCategory(id).then((res) => {
      console.log("delete");
      navigate("/admin/categories");
    });
  };

  return (
    <div className="category__wrapper">
      <Link to={"/admin/categories"} className="back-btn">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <h1>Category</h1>

      {category && (
        <div className="man-form__input">
          <label htmlFor="edit-category__input-title">Name</label>
          <input
            type="text"
            id="edit-category__input-title"
            value={category.name}
            onChange={(e) => setCategory({ ...category, name: e.target.value })}
          />
        </div>
      )}
      <div className="category__btn">
        <button className="man-btn red-btn" onClick={updateCategory}>
          Submit
        </button>
        <button className="man-btn black-btn" onClick={deleteCategory}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Category;

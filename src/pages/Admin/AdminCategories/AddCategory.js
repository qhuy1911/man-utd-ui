import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import CategoryDataService from "../../../services/CategoryDataService";
import "./AdminCategories.css";

function AddCategory() {
  const [name, setName] = useState("");
  let navigate = useNavigate();

  const addCategory = () => {
    const category = { name };
    CategoryDataService.addCategory(category).then(() => {
      navigate("/admin/categories");
    });
  };

  return (
    <div className="add-news__wrapper">
      <Link to={"/admin/categories"} className="back-btn">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <h1>Add new category</h1>

      <div className="man-form__input">
        <label htmlFor="add-news__input-title">Name</label>
        <input
          type="text"
          id="add-news__input-title"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <button className="man-btn red-btn" onClick={addCategory}>
        Add
      </button>
    </div>
  );
}

export default AddCategory;

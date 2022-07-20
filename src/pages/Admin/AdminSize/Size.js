import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import SizeDataService from "../../../services/SizeDataService";
import "./AdminSize.css";

function Size() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [size, setSize] = useState();

  useEffect(() => {
    getSizeById(id);
  }, [id]);

  const getSizeById = (id) => {
    SizeDataService.getSizeById(id).then((res) => {
      setSize(res.data);
    });
  };

  const updateSizeSubmit = () => {
    SizeDataService.updateSize(id, size).then((res) => {
      navigate("/admin/sizes");
    });
  };

  const deleteSizeSubmit = () => {
    SizeDataService.deleteSize(id).then((res) => {
      navigate("/admin/sizes");
    });
  };

  return (
    <div>
      <Link to={"/admin/sizes"} className="back-btn">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <h1>Size</h1>

      {size && (
        <>
          <div className="man-form__input">
            <label htmlFor="edit-size__input-name">Name</label>
            <input
              type="text"
              id="edit-size__input-name"
              value={size.name}
              onChange={(e) => setSize({ ...size, name: e.target.value })}
            />
          </div>

          <div className="man-form__input">
            <label htmlFor="add-size__input-stock">Stock</label>
            <input
              type="text"
              id="add-size__input-stock"
              value={size.stock}
              onChange={(e) => setSize({ ...size, stock: e.target.value })}
            />
          </div>
        </>
      )}

      <div className="category__btn">
        <button className="man-btn red-btn" onClick={updateSizeSubmit}>
          Submit
        </button>
        <button className="man-btn black-btn" onClick={deleteSizeSubmit}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Size;

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import CategoryDataService from "../../../services/CategoryDataService";
import ProductDataService from "../../../services/ProductDataService";
import UploadFilesService from "../../../services/UploadFilesService";
import "./AdminProducts.css";

function AddProduct() {
  let navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState();
  const [categories, setCategories] = useState();
  const [categoryId, setCategoryId] = useState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = () => {
    CategoryDataService.getAllCategories().then((res) => {
      setCategories(res.data);
      setCategoryId(res.data[0].id);
    });
  };

  const onChangeCategory = (e) => {
    setCategoryId(e.target.value);
  };

  const onFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const addProduct = () => {
    UploadFilesService.upload(selectedFile).then((res) => {
      // console.log(res.data);
    });

    const product = {
      name,
      description,
      price,
      image: `http://localhost:8080/api/v1/files/${selectedFile.name}`,
    };

    ProductDataService.addProduct(categoryId, product).then((res) => {
      // console.log(res.data);
      navigate("/admin/products");
    });
  };

  return (
    <div className="add-product__wrapper">
      <Link to={"/admin/products"} className="back-btn">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <h1>Add new product</h1>

      <div className="man-form__input">
        <label htmlFor="add-product__input-name">Name</label>
        <input
          type="text"
          id="add-product__input-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="man-form__input">
        <label htmlFor="add-product__input-description">Description</label>
        <input
          type="text"
          id="add-product__input-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="man-form__input">
        <label htmlFor="add-product__input-image">Image</label>
        <input
          type="file"
          id="add-product__input-image"
          onChange={onFileChange}
        />
      </div>

      <div className="man-form__input">
        <label htmlFor="add-product__input-price">Price</label>
        <input
          type="text"
          id="add-product__input-price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      {categories && (
        <div className="man-form__input">
          <label htmlFor="add-product__input-price">Category</label>
          <select id="add-product__input-price" onChange={onChangeCategory}>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <button className="man-btn red-btn" onClick={addProduct}>
        Add
      </button>
    </div>
  );
}

export default AddProduct;

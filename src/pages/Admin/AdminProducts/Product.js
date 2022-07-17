import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import CategoryDataService from "../../../services/CategoryDataService";
import ProductDataService from "../../../services/ProductDataService";
import UploadFilesService from "../../../services/UploadFilesService";
function Product() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [categories, setCategories] = useState();
  const [product, setProduct] = useState();
  const [categoryId, setCategoryId] = useState();
  const [selectedFile, setSelectedFile] = useState();

  useEffect(() => {
    getAllCategories();
    getProduct(id);
  }, [id]);

  const getAllCategories = () => {
    CategoryDataService.getAllCategories().then((res) => {
      setCategories(res.data);
    });
  };

  const getProduct = (id) => {
    ProductDataService.getProduct(id).then((res) => {
      setProduct(res.data);
      setCategoryId(res.data.category.id);
    });
  };

  const onFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const updateProduct = () => {
    UploadFilesService.upload(selectedFile).then((res) => {
      // console.log(res.data);
    });

    const newProduct = {
      ...product,
      image: `http://localhost:8080/api/v1/files/${selectedFile.name}`,
    };

    ProductDataService.updateProduct(categoryId, id, newProduct).then(() => {
      navigate("/admin/products");
    });
  };

  const deleteProduct = () => {
    ProductDataService.deleteProduct(id).then(() => {
      navigate("/admin/products");
    });
  };

  return (
    <div className="product__wrapper">
      <Link to={"/admin/products"} className="back-btn">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <h1>Product</h1>

      {product && (
        <>
          <div className="man-form__input">
            <label htmlFor="edit-product__input-name">Name</label>
            <input
              type="text"
              id="edit-product__input-name"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
          </div>

          <div className="man-form__input">
            <label htmlFor="edit-product__input-description">Description</label>
            <input
              type="text"
              id="edit-product__input-description"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            />
          </div>

          <div className="man-form__input">
            <label htmlFor="edit-product__input-price">Price</label>
            <input
              type="text"
              id="edit-product__input-price"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
          </div>
        </>
      )}

      <div className="man-form__input">
        <label htmlFor="add-product__input-image">Image</label>
        <input
          type="file"
          id="add-product__input-image"
          onChange={onFileChange}
        />
      </div>

      {categories && (
        <div className="man-form__input">
          <label htmlFor="edit-product__input-price">Category</label>
          <select
            id="edit-product__input-price"
            onChange={(e) => setCategoryId(e.target.value)}
            value={categoryId}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="category__btn">
        <button className="man-btn red-btn" onClick={updateProduct}>
          Submit
        </button>
        <button className="man-btn black-btn" onClick={deleteProduct}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Product;

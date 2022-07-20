import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ProductDataService from "../../../services/ProductDataService";
import SizeDataService from "../../../services/SizeDataService";
import "./AdminSize.css";

function AddSize() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [products, setProducts] = useState();
  const [productId, setProductId] = useState();

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    ProductDataService.getAllProducts().then((res) => {
      setProducts(res.data);
      setProductId(res.data[0].id);
    });
  };

  const addSizeSubmit = () => {
    const product = {
      name,
      stock,
    };

    SizeDataService.addSize(productId, product).then((res) => {
      // console.log(res.data);
      navigate("/admin/sizes");
    });
  };

  return (
    <div>
      <Link to={"/admin/sizes"} className="back-btn">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <h1>Add size</h1>

      {products && (
        <div className="man-form__input">
          <label htmlFor="add-size__input-product">Product</label>
          <select
            id="add-size__input-product"
            onChange={(e) => setProductId(e.target.value)}
          >
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="man-form__input">
        <label htmlFor="add-size__input-name">Name</label>
        <input
          type="text"
          id="add-size__input-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="man-form__input">
        <label htmlFor="add-size__input-stock">Stock</label>
        <input
          type="text"
          id="add-size__input-stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
      </div>

      <button className="man-btn red-btn" onClick={addSizeSubmit}>
        Add
      </button>
    </div>
  );
}

export default AddSize;

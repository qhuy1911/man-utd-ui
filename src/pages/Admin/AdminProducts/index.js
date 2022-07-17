import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductDataService from "../../../services/ProductDataService";
import "./AdminProducts.css";

function AdminProducts() {
  const [products, setProducts] = useState();

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    ProductDataService.getAllProducts().then((response) => {
      setProducts(response.data);
      console.log(response.data);
    });
  };

  return (
    <div className="admin-products__wrapper">
      <h1>Products</h1>
      <div className="admin-products__btn">
        <Link to={"add"} className="btn-link red-btn admin-products__btn-add">
          Add Product
        </Link>
      </div>
      {products && (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}$</td>
                <td className="table__action">
                  <Link
                    to={`/admin/products/${product.id}`}
                    className="table__action-link"
                  >
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

export default AdminProducts;

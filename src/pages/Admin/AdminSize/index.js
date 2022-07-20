import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SizeDataService from "../../../services/SizeDataService";
import "./AdminSize.css";

function AdminSize() {
  const [sizes, setSizes] = useState();

  useEffect(() => {
    getAllSizes();
  }, []);

  const getAllSizes = () => {
    SizeDataService.getAllSizes().then((res) => {
      setSizes(res.data);
    });
  };

  return (
    <div className="admin-sizes__wrapper">
      <h1>Sizes</h1>
      <div className="admin-products__btn">
        <Link to={"add"} className="btn-link red-btn admin-products__btn-add">
          Add Product
        </Link>
      </div>

      {sizes && (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Size</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((size, index) => (
              <tr key={size.id}>
                <td>{index + 1}</td>
                <td>{size.product.name}</td>
                <td>{size.name}</td>
                <td>{size.stock}</td>
                <td className="table__action">
                  <Link
                    to={`/admin/sizes/${size.id}`}
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

export default AdminSize;

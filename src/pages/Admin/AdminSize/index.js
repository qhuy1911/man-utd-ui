import {faPen, faCaretRight, faCaretLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SizeDataService from "../../../services/SizeDataService";
import "./AdminSize.css";

function AdminSize() {
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    getAllSizes();
  }, []);

  const getAllSizes = () => {
    SizeDataService.getAllSizes().then((res) => {
      setSizes(res.data);
    });
  };
  const [activePage, setActivePage] = useState(1);

  const [number, setNumber] = useState(1);
  const perPage = 5;

  const lastPage = number * perPage; //index sizes first
  const firstPage = lastPage - perPage; //index sizes last
  const currentSizes = sizes.slice(firstPage, lastPage);
  const pageNumber = [];

  const handleChangePage = (num) => {
    setActivePage(num);
    setNumber(num);
    console.log(num);
  };

  for (let i = 1; i <= Math.ceil(sizes.length / perPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="admin-sizes__wrapper">
      <h1>Sizes</h1>
      <div className="admin-products__btn">
        <Link to={"add"} className="btn-link red-btn admin-products__btn-add">
          Add Size
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
            {currentSizes.map((size, index) => (
              <tr key={size.id}>
                <td>{index + firstPage +1}</td>
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
      <div className="home__page__articles page__end">
        <div className="div__page">
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faCaretLeft}
                className="icon__cross"
                onClick={() => {
                  setNumber(number - 1);
                }}
              />
            </li>
            {pageNumber.map((num, index) => (
              <li
                key={index}
                className={activePage === num ? "active_page_home" : ""}
                onClick={() => handleChangePage(num)}
              >
                <span>{num}</span>
              </li>
            ))}
            <li>
              <FontAwesomeIcon
                icon={faCaretRight}
                className="icon__cross"
                onClick={() => {
                  setNumber(number + 1);
                }}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminSize;

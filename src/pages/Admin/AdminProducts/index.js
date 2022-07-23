import {faPen, faCaretRight, faCaretLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductDataService from "../../../services/ProductDataService";
import "./AdminProducts.css";

function AdminProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    ProductDataService.getAllProducts().then((response) => {
      setProducts(response.data);
      console.log(response.data);
    });
  };
  const [activePage, setActivePage] = useState(1);

  const [number, setNumber] = useState(1);
  const perPage = 5;

  const lastPage = number * perPage; //index product first
  const firstPage = lastPage - perPage; //index product last
  const currentProducts = products.slice(firstPage, lastPage);
  const pageNumber = [];

  const handleChangePage = (num) => {
    setActivePage(num);
    setNumber(num);
    console.log(num);
  };

  for (let i = 1; i <= Math.ceil(products.length / perPage); i++) {
    pageNumber.push(i);
  }
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
            {currentProducts.map((product, index) => (
              <tr key={product.id}>
                <td>{index + firstPage + 1}</td>
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

export default AdminProducts;

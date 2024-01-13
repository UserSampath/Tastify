import React from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
const Pagination = () => {
  return (
    <div className="d-flex">
      <div>
        <ul
          className="pagination pagination-sm"
          style={{ margin: 0, marginBottom: 0, paddingTop: "5px" }}>
          <li className="page-item ">
            <a
              className="page-link"
              href="#"
              tabIndex="-1"
              aria-disabled="true">
              <FaAngleLeft />
            </a>
          </li>
          <li className="page-item">
            <a className="page-link " href="#">
              1
            </a>
          </li>
          <li className="page-item active" aria-current="page">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              <FaAngleRight />
            </a>
          </li>
        </ul>
      </div>
      <div
        style={{
          marginTop: "11px",
          marginLeft: "8px",
          color: "#545454dd",
          fontSize: "16px",
        }}></div>
    </div>
  );
}

export default Pagination
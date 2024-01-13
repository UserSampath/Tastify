import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
const UserDetails = () => {
  return (
    <div
      className="container-fluid "
      style={{
        borderBottom: "1px solid #ececec",
      }}>
      <div style={{ margin: "0px 10px 0px 30px" }}>
        <div
          className="row align-items-center container-fluid userDetails-container"
          style={{
            height: "45px",
            color: "#353434dd",
          }}>
          <div className="col-4 d-flex align-items-center">
            <img
              style={{ height: "40px", marginRight: "10px" }}
              src="../../../image/Men.png"
              alt="user-avatar"
            />
            <div style={{ fontWeight: "600", fontSize: "16px" }}>
              {" "}
              Sasadari Shashiprabha
            </div>
          </div>
          <div className="col-3">
            <div style={{ fontSize: "16px" }}>2024 January 05</div>
          </div>
          <div className="col-3">
            <div
              className="d-inline-block"
              style={{
                backgroundColor: "#d4dfff96",
                padding: "2px 5px 2px 5px",
                borderRadius: "4px",
                color: "#4848f7",
              }}>
              <div className="d-flex align-items-center ">
                <FaFacebookF style={{ marginRight: "5px", fontSize: "14px" }} />
                <div style={{ fontSize: "14px" }}>Facebook</div>
              </div>
            </div>
          </div>
          <div className="col-1">
            <div style={{ fontSize: "16px" }}>12</div>
          </div>
          <div className="col-1" style={{ paddingLeft: "52px" }}>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                color: "red",
                backgroundColor: "#f8d9d9cc",
                padding: "2px 5px",
                borderRadius: "5px  ",
                width: "30px",
                height: "30px",
              }}>
              <MdDeleteOutline size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails
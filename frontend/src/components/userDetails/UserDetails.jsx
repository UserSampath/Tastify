import React from 'react'
import { MdDeleteOutline } from "react-icons/md";

import LoginMethodTag from '../loginMethodTag/LoginMethodTag';
import { useNavigate } from 'react-router-dom';
const UserDetails = ({ user }) => {
  const navigate=useNavigate();
  return (
    <div
      onClick={() => navigate("/one_member_posts")}
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
              style={{
                height: "35px",
                width: "35px",
                marginRight: "10px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
              src={user.image}
              alt="user-avatar"
            />
            <div
              style={{
               
                fontSize: "16px",
              }}>{`${user.firstName} ${user.lastName}`}</div>
          </div>
          <div className="col-3">
            <div style={{ fontSize: "16px" }}>{user.joinedDate}</div>
          </div>
          <div className="col-3">
            <LoginMethodTag loginMethod={user.loginMethod} />
          </div>
          <div className="col-1">
            <div style={{ fontSize: "16px" }}>{user.posts}</div>
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
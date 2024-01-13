import React from "react";
import Navbars from "../../components/NavBar2/Navbar";
import SideBar from "../../components/side/SideBar";
import { MdDeleteOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import UserDetails from "../../components/userDetails/UserDetails";
import SearchBar from "../../components/searchBar/SearchBar";
import "./userManagement.css"

const UserManagement = () => {
  return (
    <div>
      <SideBar selectedNav="User Management">
        <div>
          <Navbars />

          <div className="d-flex justify-content-center">
            <div
              style={{ width: "90%", margin: 0 }}
              className="d-flex justify-content-between">
              <div>
                <div>
                  <ul
                    className="pagination"
                    style={{ margin: 0, marginBottom: 0 }}>
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
              </div>
              <div>
                <SearchBar />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <div
              style={{
                height: `calc(100vh - 100px)`,
                width: "90%",
                borderRadius: "5px",
              }}
              className="bg-white mt-1">
              {/*ddddddddddd */}

              <div className="container-fluid">
                <div style={{ margin: "0px 10px 0px 30px" }}>
                  <div
                    className="row align-items-center container-fluid"
                    style={{
                      height: "35px",
                      color: "#000000dd",
                      fontWeight: "600",
                    }}>
                    <div className="col-4 ">
                      <div style={{ marginLeft: "50px" }}>Name</div>
                    </div>
                    <div className="col-3">Joined Date </div>
                    <div className="col-3">
                      <p>login method</p>
                    </div>
                    <div className="col-1">posts</div>
                  </div>
                </div>
              </div>

              <UserDetails />
              <UserDetails />
              <UserDetails />
              <UserDetails />
              <UserDetails />
            </div>
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default UserManagement;

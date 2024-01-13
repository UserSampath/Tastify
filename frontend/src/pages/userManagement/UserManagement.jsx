import React from "react";
import Navbars from "../../components/NavBar2/Navbar";
import SideBar from "../../components/side/SideBar";

const UserManagement = () => {
  return (
    <div>
      <SideBar selectedNav="User Management">
        <div>
          <Navbars />
          <div className="d-flex justify-content-center align-items-center">
            <div
              style={{
                height: `calc(100vh - 85px)`,
                width: "90%",
                borderRadius: "5px",
              }}
              className="bg-white mt-4  ">
              <h1>User Management</h1>
            </div>
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default UserManagement;

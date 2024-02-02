import React, { useState } from "react";
import NavBar from "../../components/NavBar/Navbar";
import SideBar from "../../components/side/SideBar";

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(
    localStorage.getItem("sideBarOpen") == "true"
  );
  return (
    <div>
      <SideBar setSidebarOpen={setSidebarOpen} selectedNav="Setting 3">
        <div>
          <NavBar sidebarOpen={sidebarOpen} />
          <div
            style={{
              transition: "padding-left 300ms",
              paddingTop: "50px",
              paddingLeft: sidebarOpen ? "240px" : "60px",
            }}>
            <h1>Settings</h1>
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default Settings;

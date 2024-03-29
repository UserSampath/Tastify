import React, { useState } from "react";
import NavBar from "../../components/NavBar/Navbar";
import SideBar from "../../components/side/SideBar";
const ReportGenerating = () => {
  const [sidebarOpen, setSidebarOpen] = useState(
    localStorage.getItem("sideBarOpen") == "true"
  );
  return (
    <div>
      <SideBar setSidebarOpen={setSidebarOpen} selectedNav="Setting 2">
        <div>
          <NavBar sidebarOpen={sidebarOpen} />
          <div
            style={{
              transition: "padding-left 300ms",
              paddingTop: "50px",
              paddingLeft: sidebarOpen ? "240px" : "60px",
            }}>
            <h1>setting 2</h1>
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default ReportGenerating;

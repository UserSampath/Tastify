import React from "react";
import NavBar from "../../components/NavBar/Navbar";
import SideBar from "../../components/side/SideBar";
const ReportGenerating = () => {
  return (
    <div>
      <SideBar selectedNav="Report Generating">
        <div>
          <NavBar />
          <div>
            <h1>Report Generating</h1>
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default ReportGenerating;

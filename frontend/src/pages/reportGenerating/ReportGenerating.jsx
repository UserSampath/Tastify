import React from 'react'
import Navbars from "../../components/NavBar2/Navbar";
import SideBar from "../../components/side/SideBar";
const ReportGenerating = () => {
  return (
    <div>
      <SideBar selectedNav="Report Generating">
        <div>
          <Navbars />
          <div>
            <h1>Report Generating</h1>
          </div>
        </div>
      </SideBar>
    </div>
  );
}

export default ReportGenerating
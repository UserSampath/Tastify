import React from 'react'
import Navbars from "../../components/NavBar2/Navbar";
import SideBar from "../../components/side/SideBar";

const IPConfiguration = () => {
  return (
    <div>
      <SideBar selectedNav="IP Configuration">
        <div>
          <Navbars />
          <div>
            <h1>vdff</h1>
          </div>
        </div>
      </SideBar>
    </div>
  );
}

export default IPConfiguration
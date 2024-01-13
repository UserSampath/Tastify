import React from 'react'
import Navbars from "../../components/NavBar2/Navbar";
import SideBar from "../../components/side/SideBar";

const Settings = () => {
  return (
    <div>
      <SideBar selectedNav="Settings">
        <div>
          <Navbars />
          <div>
            <h1>Settings</h1>
          </div>
        </div>
      </SideBar>
    </div>
  );
}

export default Settings
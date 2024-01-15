import React from "react";
import NavBar from "../../components/NavBar/Navbar";
import SideBar from "../../components/side/SideBar";

const Settings = () => {
  return (
    <div>
      <SideBar selectedNav="Settings">
        <div>
          <NavBar />
          <div>
            <h1>Settings</h1>
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default Settings;

import React from 'react'
import Navbars from "../../components/NavBar2/Navbar";
import SideBar from "../../components/side/SideBar";
const QueueManagement = () => {
  return (
    <div>
      <SideBar selectedNav="Queue Management">
        <div>
          <Navbars />
          <h1>Queue Management</h1>
        </div>
      </SideBar>
    </div>
  );
}

export default QueueManagement
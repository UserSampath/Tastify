import React from "react";
import Navbars from "../../components/NavBar2/Navbar";
import SideBar from "../../components/side/SideBar";

const Home = () => {
  return (
    <div>
      <SideBar>
        <div style={{ width: "100% " }}>
          <Navbars />
        </div>
      </SideBar>
    </div>
  );
};

export default Home;

import React from "react";
import NavBar from "../../components/NavBar2/Navbar";
import SideBar from "../../components/side/SideBar";
import AllPostsCom from "../../components/AllPostsCom/AllPostsCom";

const AllPost = ({posts}) => {


  

  return (
    <div>
      <SideBar selectedNav="AllPost">
        <div>
          <NavBar />
          <AllPostsCom posts={posts}/>
        </div>
      </SideBar>
    </div>
  );
};

export default AllPost;

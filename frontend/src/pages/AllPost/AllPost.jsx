import React, { useState } from "react";
import NavBar from "../../components/NavBar/Navbar";
import SideBar from "../../components/side/SideBar";
import AllPostsCom from "../../components/AllPostsCom/AllPostsCom";
import SearchBar from "../../components/postSearchBar/SearchBar";


const AllPost = ({ posts }) => {
  const [sidebarOpen, setSidebarOpen] = useState(
    localStorage.getItem("sideBarOpen") == "true"
  );
  return (
    <div>
      <SideBar setSidebarOpen={setSidebarOpen} selectedNav="AllPost">
        <div>
          <NavBar sidebarOpen={sidebarOpen} />
          <div style={{transition: "padding-left 300ms",paddingTop:"50px",paddingLeft:sidebarOpen?"240px":"60px"}}> <div className=" d-flex justify-content-center align-items-center">
            <SearchBar />
          </div>
          <AllPostsCom posts={posts} /> </div>
         
        </div>
      </SideBar>
    </div>
  );
};

export default AllPost;

import React from "react";
import NavBar from "../../components/NavBar/Navbar";
import SideBar from "../../components/side/SideBar";
import AllPostsCom from "../../components/AllPostsCom/AllPostsCom";
import SearchBar from "../../components/postSearchBar/SearchBar";

const AllPost = ({ posts }) => {
  return (
    <div>
      <SideBar selectedNav="AllPost">
        <div>
          <NavBar />
          <div className=" d-flex justify-content-center align-items-center mt-2">
            <SearchBar />
          </div>
          <AllPostsCom posts={posts} />
        </div>
      </SideBar>
    </div>
  );
};

export default AllPost;

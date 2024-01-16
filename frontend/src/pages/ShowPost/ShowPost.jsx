import React from "react";
import Post from "../../components/Post/Post";
import Navbars from "../../components/NavBar/Navbar";
import SideBar from "../../components/side/SideBar";
import SearchBar from "../../components/postSearchBar/SearchBar";
const ShowPost = ({ posts }) => {
  return (
    <div>
      <SideBar selectedNav="User Management">
        <div>
          <Navbars />
          <div className=" d-flex justify-content-center align-items-center mt-2">
            <SearchBar />
          </div>
          <Post posts={posts} />
        </div>
      </SideBar>
    </div>
  );
};

export default ShowPost;

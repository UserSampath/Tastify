import React from "react";
import Post from "../../components/Post/Post";
import Navbars from "../../components/NavBar/Navbar";
import SideBar from "../../components/side/SideBar";
const ShowPost = ({ posts }) => {
  return (
    <div>
      <SideBar selectedNav="User Management">
        <div>
          <Navbars />

          <Post posts={posts} />
        </div>
      </SideBar>
    </div>
  );
};

export default ShowPost;

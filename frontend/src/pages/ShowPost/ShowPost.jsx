import React,{useState} from "react";
import Post from "../../components/Post/Post";
import Navbars from "../../components/NavBar/Navbar";
import SideBar from "../../components/side/SideBar";
const ShowPost = ({ posts }) => {
    const [sidebarOpen, setSidebarOpen] = useState();
  return (
    <div>
      <SideBar setSidebarOpen={setSidebarOpen} selectedNav="User Management">
        <div>
          <Navbars sidebarOpen={sidebarOpen} />
          <div style={{paddingTop:"50px"}}>
            <Post posts={posts} />
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default ShowPost;

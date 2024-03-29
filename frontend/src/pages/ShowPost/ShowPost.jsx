import React,{useState} from "react";
import Post from "../../components/Post/Post";
import Navbars from "../../components/NavBar/Navbar";
import SideBar from "../../components/side/SideBar";
import SearchBar from "../../components/postSearchBar/SearchBar";
const ShowPost = ({ posts }) => {
    const [sidebarOpen, setSidebarOpen] = useState();
  return (
    <div>
      <SideBar setSidebarOpen={setSidebarOpen} selectedNav="User Management">
        <div>
          <Navbars sidebarOpen={sidebarOpen} />
          <div
            style={{
              transition: "padding-left 300ms",
              paddingTop: "50px",
              paddingLeft: sidebarOpen ? "240px" : "60px",
            }}>
            

            
            <Post posts={posts} />
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default ShowPost;

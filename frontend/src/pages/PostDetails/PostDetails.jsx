// PostDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import Navbars from "../../components/NavBar2/Navbar";
import "./PostDetails.css";
import { FcLike } from "react-icons/fc";
import { BsReply } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import CommentSection from "../../components/commentSection/CommentSection";

const PostDetails = ({ posts }) => {
  const { postId } = useParams();
  const post = posts && posts.find((p) => p.id === parseInt(postId));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <div>
        <Navbars />
        <div
          className="container bg-white mt-2"
          style={{ width: "800px", borderRadius: "10px" ,paddingTop:"10px"}}>
            <div style={{ textAlign: "center", }}>
            <img
          src={post.image}
          alt=""
          className="large-image"
          style={{ display: "block", margin: "auto", marginTop: "20px" }}
        />      </div>
          <div className="shadow-card">
            <div className="details">
              <div>
                <h4>{post.title}</h4>
                <p className="date">Create Date: {post.CreatedDate}</p>
                <p style={{ textAlign: "justify" }}>{post.description}</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start", // Align to the left
                    marginTop: "10px", // Add margin to the top
                  }}
                >
                  <div className="likes-container">
                    <FcLike style={{ marginRight: "5px" }} />
                    <p className="liketag">{post.likes}</p>
                  </div>
                  <div>
                    <FiMessageSquare
                      style={{
                        marginRight: "5px",
                        marginLeft:"5px"
                      }}
                    />
                  </div>
                </div>
              </div>
           
            </div>
          </div>
        </div>
        <CommentSection />
     
      </div>
    </div>
  );
};

export default PostDetails;

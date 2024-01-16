// ServiceComponent.jsx
import React, { useState } from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { FiMessageSquare } from "react-icons/fi";
import SearchBar from "../postSearchBar/SearchBar";

const Post = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleCardClick = (postId) => {
    setSelectedPost(postId === selectedPost ? null : postId);
  };

  return (
    <div>
      <div>
        {" "}
        <div className="d-flex justify-content-center align-items-center m-2">
          <div className="d-flex align-items-center">
            <img
              style={{ height: "45px", width: "45px", borderRadius: "50%" }}
              src="./../../../image/men.png"
            />
            <div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginLeft: "10px",
                  color: "#505050",
                }}>
                Nalaka Sampath
              </div>
              <div style={{ marginLeft: "10px", fontSize: "14px" }}>
                <span style={{ color: "#ad0000", fontWeight: "600" }}>36</span>{" "}
                posts
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="mainContainner">
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              margin: "auto",
              width: "250px",
              borderRadius: "15px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              position: "relative",
              transition: "transform 0.3s ease-out",
              transform: selectedPost === post.id ? "translateY(-5px)" : "none",
            }}>
            <Link to={`/post/${post.id}`} className="post-link">
              <div className="mainshowdetail">
                <div className="profileContainer"></div>
                <div className="titledata">
                  <h4 className="showposttitle">{post.title}</h4>
                  <p className="createdate" style={{ marginLeft: "5px" }}>
                    {post.CreatedDate}
                  </p>
                </div>

                <div className="imagediv">
                  <img src={post.image} alt="" className="image" />
                </div>
                <div className="detail">
                  <div className="likes-container">
                    <FcLike style={{ marginRight: "5px" }} />
                    <p className="liketag">{post.likes}</p>

                    <div className="commentshow">
                      <FiMessageSquare
                        style={{
                          marginRight: "5px",
                          marginLeft: "5px",
                          marginTop: "2px",
                        }}
                      />
                      <p className="liketag">{post.commentCount}</p>
                    </div>
                  </div>
                </div>
              </div>
              {selectedPost === post.id && <div className="blueline"></div>}
              <div
                className="animation"
                onClick={() => handleCardClick(post.id)}></div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;

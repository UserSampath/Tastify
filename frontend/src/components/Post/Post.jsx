// ServiceComponent.jsx
import React, { useState } from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { FiMessageSquare } from "react-icons/fi";
import SearchBar from "../postSearchBar/SearchBar";
import { MdDeleteOutline } from "react-icons/md";

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
              padding: "8px",
              margin: "auto",
              width: "260px",
              borderRadius: "15px",
              boxShadow: "0px 4px 8px rgba(68, 7, 7, 0.1)",
              position: "relative",
              transition: "transform 0.3s ease-out",
              transform: selectedPost === post.id ? "translateY(-5px)" : "none",
            }}>
            <Link to={`/post/${post.id}`} className="post-link">
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  height: "230px",
                }}>
                <div className="titlediv">
                  <div
                    style={{}}
                    className="d-flex justify-content-between align-items-center">
                    <div className="posttitle overflow-hidden">
                      {post.title}
                    </div>
                    <div className="comment-delete-button post-delete-button">
                      <MdDeleteOutline
                        style={{ margin: "2px 4px 2px 4px " }}
                        size={18}
                      />
                    </div>
                  </div>
                </div>

                <div className="imagediv">
                  <img src={post.image} alt="" className="image" />
                </div>
                <div
                  style={{ marginTop: "10px" }}
                  className="alllikes-container">
                  <FcLike style={{ marginRight: "5px" }} />
                  <p className="liketag">{post.likes}</p>

                  <div className="commentall">
                    <FiMessageSquare
                      style={{
                        marginRight: "5px",
                        marginLeft: "5px",
                        marginTop: "2px",
                      }}
                    />
                    <p className="commenttag">{post.commentCount}</p>
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

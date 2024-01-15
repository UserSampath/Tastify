// ServiceComponent.jsx
import React, { useState } from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";
const Post = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleCardClick = (postId) => {
    setSelectedPost(postId === selectedPost ? null : postId);
  };

  return (
    <div className="mainContainner">
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            padding: "8px",
            margin: "auto",
            width: "250px",
            borderRadius: "15px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            position: "relative",
            transition: "transform 0.3s ease-out",
            transform: selectedPost === post.id ? "translateY(-5px)" : "none", 
          }}>
          <Link to={`/post/${post.id}`} className="post-link">
          <div className='maindetail'>
          <div className='profileContainer'>
                </div>
                <div className="titlediv">
                    <div className="title-and-likes">
                        <h4 className="showposttitle">{post.title}</h4>
                        <div className="likes-container">
                        <FcLike style={{ marginRight: "5px" }} />
                        <p className="liketag">{post.likes}</p>
                        </div>
                        
                    </div>
                    <p className="Createdate">Create Date: {post.CreatedDate}</p>

                    </div>

                
                    <div className="imagediv">
              <img src={post.image} alt="" className="image" />
            </div>
            <div className="detail">
              <div className="title-likes-container">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
               
                    <p className="tag">{post.description}</p>
                  </div>
                  
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
  );
};

export default Post;

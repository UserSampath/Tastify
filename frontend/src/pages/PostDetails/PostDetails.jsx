// PostDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import Navbars from "../../components/NavBar/Navbar";
import "./PostDetails.css";
import { FcLike } from "react-icons/fc";
import { BsReply } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import CommentSection from "../../components/commentSection/CommentSection";
import { MdDeleteOutline } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa6";
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
          style={{
            width: "800px",
            borderRadius: "10px",
            paddingTop: "10px",
            position: "relative",
          }}>
          <div style={{ position: "absolute", left: "-70px", top: "20px" }}>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "35px",
                border: "2px solid #990000",
                width: "60px ",
                borderRadius: "20px",
                color: "#990000",
                backgroundColor: "#f7f7f797",
              }}>
              <FaAngleLeft />
            </div>
          </div>
          <div className=" container-lg d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <img
                src="../../../image/Men.png"
                style={{ height: "50px", width: "50px" }}
              />
              <div className="ms-2">
                <div
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    color: "#454545",
                  }}>
                  {" "}
                  Danushka Dishan
                </div>
                <div style={{ fontSize: "12px", color: "gray" }}>
                  {" "}
                  {post.CreatedDate}
                </div>
              </div>
            </div>
            <div className="comment-delete-button">
              <MdDeleteOutline
                style={{ margin: "2px 4px 2px 4px " }}
                size={22}
              />
            </div>
          </div>
          <hr style={{ margin: "5px" }} />
          <div className="d-flex justify-content-center align-items-center">
            <div
              style={{ fontSize: "28px", color: "#990000", fontWeight: "600" }}>
              {post.title}
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src={post.image}
              alt=""
              className="large-image"
              style={{ display: "block", margin: "auto", marginTop: "0px" }}
            />{" "}
          </div>
          <div className="shadow-card">
            <div className="details">
              <div>
                <div
                  style={{
                    textAlign: "justify",
                    fontWeight: "100",
                    fontFamily: "sans-serif",
                    fontSize: "16px",
                    color: "#6b6b6b",
                  }}>
                  {post.description}
                </div>
                {/* 
                   <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start", // Align to the left
                    marginTop: "10px", // Add margin to the top
                  }}>
                  <div className="likes-container">
                    <FcLike style={{ marginRight: "5px" }} />
                    <p className="liketag">{post.likes}</p>
                  </div>
                  <div>
                    <FiMessageSquare
                      style={{
                        marginRight: "5px",
                        marginLeft: "5px",
                      }}
                    />
                  </div>
                </div>
                  
                  */}
                <hr style={{ margin: "10px" }} />
                <div className="d-flex align-content-center">
                  <div className="d-flex align-items-center">
                    <FcLike size={25} style={{ marginRight: "5px" }} />
                    <p className="liketag">{post.likes}</p>
                  </div>

                  <div className="d-flex align-items-center ms-3">
                    <FiMessageSquare
                      size={20}
                      style={{
                        marginRight: "5px",
                        marginLeft: "5px",
                      }}
                    />
                    <p className="liketag">22</p>
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

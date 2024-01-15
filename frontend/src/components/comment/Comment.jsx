import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { BsReply } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import SubComment from "../subComment/SubComment";
import { MdDeleteOutline } from "react-icons/md";
import "./comment.css";
const Comment = () => {
  const [showSubComment, setShowSubComment] = useState(false);
  return (
    <div className="container ">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          {" "}
          <img
            src="../../../image/Men.png"
            style={{ width: "35px", height: "35px", borderRadius: "50%" }}
          />
          <div>
            <div
              style={{
                fontSize: "14px",
                marginLeft: "8px",
                fontWeight: "600",
                color: "#4e4e4e",
              }}>
              Nalaka Sampath
            </div>
            <div
              style={{
                fontSize: "10px",
                marginLeft: "8px",
                color: "gray",
              }}>
              1 min ago
            </div>
          </div>
        </div>

        <div className="comment-delete-button">
          <MdDeleteOutline style={{ margin: "2px 4px 2px 4px " }} size={20} />
        </div>
      </div>
      <div style={{ fontSize: "13px", color: "#4e4e4e", marginTop: "3px" }}>
        short Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco.
      </div>
      <div className="d-flex align-items-center mt-1">
        <FcLike style={{ marginRight: "5px", marginBottom: "3px" }} />
        <p style={{ fontSize: "14px" }}>43</p>
        <div
          className="d-flex align-content-center sub-comment-button"
          style={{
            marginLeft: "15px",
            padding: "1px 4px 0px 4px",
            borderRadius: "4px",
          }}
          onClick={() => setShowSubComment(!showSubComment)}>
          <FiMessageSquare
            style={{
              marginRight: "5px",
              marginTop: "2px",
            }}
          />

          <p style={{ fontSize: "14px" }}>2</p>
        </div>
      </div>
          <hr style={{ margin: "5px" }} />
          
      {showSubComment && (
        <div style={{transition:"300ms"}}>
          <SubComment />
          <SubComment />
        </div>
      )}
    </div>
  );
};

export default Comment;

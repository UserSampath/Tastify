import React from "react";
import Comment from "../comment/Comment";

const CommentSection = () => {
  return (
    <div
      className="container  mt-1"
      style={{
        width: "800px",
        borderRadius: "10px",
        padding: "10px",
        backgroundColor: "#ffffffd2",
      }}>
      <Comment />
      <Comment />
    </div>
  );
};

export default CommentSection;

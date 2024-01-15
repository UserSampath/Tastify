import React from "react";
import { FcLike } from "react-icons/fc";
import { BsReply } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

const SubComment = () => {
  return (
    <div className="" style={{ marginLeft: "5%" ,backgroundColor:"#f6f6f6",borderRadius:"8px",padding:"0px 4px 0px 8px" }}>
      <div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-content-center">
            <img
              src="../../../image/Men.png"
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "50%",
              }}
            />
            <div>
              <div
                style={{
                  fontSize: "14px",
                  marginLeft: "8px",
                  fontWeight: "600",
                  color: "#4e4e4e",
                }}>
                Nawoda madumal
              </div>
              <div
                style={{
                  fontSize: "10px",
                  marginLeft: "8px",
                  color: "gray",
                }}>
                20 min ago
              </div>
            </div>
          </div>
          <div className="comment-delete-button" >
            <MdDeleteOutline style={{ margin: "0px 2px 0px 2px " }} size={18} />
          </div>
        </div>

        <div
          style={{
            fontSize: "13px",
            color: "#4e4e4e",
            marginTop: "3px",
          }}>
          short Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod.
        </div>
        <div className="d-flex align-items-center mt-1">
          <FcLike style={{ marginRight: "5px", marginBottom: "3px" }} />
          <p style={{ fontSize: "14px" }}>2</p>
        </div>
        <hr style={{ margin: "5px" }} />
      </div>
    </div>
  );
};

export default SubComment;

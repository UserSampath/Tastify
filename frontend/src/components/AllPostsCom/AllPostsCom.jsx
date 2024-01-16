import React,{useState} from 'react'
import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import "./AllPostsCom.css" 
import { MdDeleteOutline } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";

const AllPostsCom = ({posts}) => {
    
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
            width: "260px",
            borderRadius: "15px",
            boxShadow: "0px 4px 8px rgba(68, 7, 7, 0.1)",
            position: "relative",
            transition: "transform 0.3s ease-out",
            transform: selectedPost === post.id ? "translateY(-5px)" : "none",
          }}>
          <Link to={`/post/${post.id}`} className="post-link">
            <div className="maindetail">
              <div className="profileContainer">
                <div className="d-flex justify-content-center">
                  <img
                    src={post.profilePicture}
                    alt=""
                    className="profileImage"
                  />
                  <div>
                    <div style={{ marginTop: "4px " }} className="tagName">
                      {post.firstName} {post.lastName}
                    </div>
                    <div
                      style={{
                        color: "gray",
                        fontSize: "12px",
                        margin: 0,
                        padding: 0,
                      }}>
                      {post.CreatedDate}
                    </div>
                  </div>
                </div>
                <div className="comment-delete-button post-delete-button">
                  <MdDeleteOutline
                    style={{ margin: "2px 4px 2px 4px " }}
                    size={18}
                  />
                </div>
              </div>
              <div className="titlediv">
                <div className="title-and-likes">
                  <div className="posttitle">{post.title}</div>
              
                </div>
              </div>

              <div className="imagediv">
                <img src={post.image} alt="" className="image" />
              </div>
              <div className="alllikes-container">
                        <FcLike style={{ marginRight: "5px" }} />
                        <p className="liketag">{post.likes}</p>
                     
                        <div className='commentall'>
                          <FiMessageSquare
                            style={{
                              marginRight: "5px",
                              marginLeft: "5px",
                              marginTop : "2px",
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
  );
}

export default AllPostsCom
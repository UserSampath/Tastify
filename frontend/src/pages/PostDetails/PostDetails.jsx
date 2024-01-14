// PostDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbars from "../../components/NavBar2/Navbar";
import "./PostDetails.css";
import { FcLike } from "react-icons/fc";

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
            <div    className="container bg-white mt-2"
                    style={{ width: "800px", borderRadius: "10px" }}>
                        <div className="shadow-card">
                            <img src={post.image} alt="" className="large-image" />
                            <div className="details">
                                <div>
                                    <h4 >{post.title}</h4>
                                    <p className='date'>Create Date: {post.CreatedDate}</p>
                                    <p style={{ textAlign: 'justify' }}>{post.description}</p>
                                </div>
                                <div className="likes-container">
                                    <FcLike style={{ marginRight: '5px' }}/> <p className="liketag">{post.likes}</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default PostDetails;

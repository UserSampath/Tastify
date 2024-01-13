// ServiceComponent.jsx
import React,{useState} from 'react';
import "./Post.css"
const Post = ({ posts }) => {
    const [selectedPost, setSelectedPost] = useState(null);

    const handleCardClick = (postId) => {
      setSelectedPost(postId === selectedPost ? null : postId);
    };
  
    return (
      <div  className='mainContainner' >
        {posts.map(post => (
          <div
            key={post.id}
            style={{
              padding: '8px',
              margin: 'auto',
              width: '250px',
              borderRadius: '15px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              transition: 'transform 0.3s ease-out', // Add a transition for smooth animation
              transform: selectedPost === post.id ? 'translateY(-5px)' : 'none', // Apply the transform when the card is selected
            }}
          >
            <div  className= "imagediv">
              <img src={post.image} alt="" className='image'  />
            </div>
            <div  className ="detaildiv">
              
              <h4  className = "title" >{post.title}</h4>
              <p  className ="tag" >Create Date : {post.CreatedDate}</p>

              <p className ="tag" >{post.description}</p>

            </div>
            {selectedPost === post.id && (
              <div
              className='blueline'
              
              ></div>
            )}
            <div
            className='animation'
              
              onClick={() => handleCardClick(post.id)}
            ></div>
          </div>
        ))}
      </div>
    );
  };

export default Post;

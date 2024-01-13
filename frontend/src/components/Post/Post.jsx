// ServiceComponent.jsx
import React,{useState} from 'react';

const Post = ({ posts }) => {
    const [selectedPost, setSelectedPost] = useState(null);

    const handleCardClick = (postId) => {
      setSelectedPost(postId === selectedPost ? null : postId);
    };
  
    return (
      <div style={{ marginTop: '14px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
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
            <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
              <img src={post.image} alt="" style={{ width: '100%', height: '150px', objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} />
            </div>
            <div style={{ padding: '8px', backgroundColor: '#fff', borderRadius: '0 0 8px 8px', height: '80px', overflow: 'hidden' }}>
              
              <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>{post.title}</h4>
              <p style={{ fontSize: '0.55rem', color: '#333', marginBottom: '12px' }}>Create Date : {post.CreatedDate}</p>

              <p style={{ fontSize: '0.55rem', color: '#333', marginBottom: '12px' }}>{post.description}</p>
              <p style={{ fontSize: '0.55rem', color: '#333', marginBottom: '12px' }}>Create Date : {post.CreatedDate}</p>

            </div>
            {selectedPost === post.id && (
              <div
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '90%',
                  height: '3px',
                  backgroundColor: 'blue',
                  transition: 'height 0.3s ease-out', // Add a transition for smooth animation
                }}
              ></div>
            )}
            <div
              style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '100%', cursor: 'pointer' }}
              onClick={() => handleCardClick(post.id)}
            ></div>
          </div>
        ))}
      </div>
    );
  };

export default Post;

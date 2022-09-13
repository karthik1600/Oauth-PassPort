import React from 'react'
import { posts } from '../data';
import { useParams,useLocation } from 'react-router-dom';

const Post = () => {  
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const post = posts.find((post) => id === post.id.toString())
  console.log(post)
  return (
      <div className="post"  >
      <img src={post.img} alt="" className="postImg" />
      <h1 className="postTitle">{post.title}</h1>
      <p className="postDesc">{post.desc}</p>
      <p className="postLongDesc">{post.longDesc}</p>
    </div>
  )
}

export default Post
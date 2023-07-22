import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
import "./PostSide.css"
import { useParams } from "react-router-dom";

const PostSide = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const { id } = useParams();
  const [refetchPosts, setRefetchPosts] = useState(false);
  return (
    <div className="PostSide">
        {id ? (
        id === user._id && <PostShare setRefetchPosts={setRefetchPosts} />
      ) : (
        <PostShare setRefetchPosts={setRefetchPosts} />
      )}
        <Posts/>
    </div>
  )
}

export default PostSide
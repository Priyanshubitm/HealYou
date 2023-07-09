import React, { useState } from 'react'
import "./Post.css"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import IosShareIcon from '@mui/icons-material/IosShare';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from 'react-redux';
import { hugPost, likePost } from '../../api/PostRequest';

const Post = ({data}) => {
    const {user} = useSelector((state) => state.authReducer.authData);
    const [liked , setLiked] = useState(data.likes.includes(user._id));
    const [likes , setLikes] = useState(data.likes.length);
    const [hugged , setHugged] = useState(data.hugs.includes(user._id));
    const [hugs , setHugs] = useState(data.hugs.length);

    const handleLike =()=>{
        setLiked((prev)=>!prev);
        likePost(data._id , user._id)
        liked ? setLikes((prev)=>prev-1) : setLikes((prev)=>prev+1);
    }
    const handleHug =()=>{
        setHugged((prev)=>!prev);
        hugPost(data._id , user._id)
        hugged ? setHugs((prev)=>prev-1) : setHugs((prev)=>prev+1);
    }

  return (
    <div className="Post">
        <img src={ data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : "" } alt=""  />

        <div className="postReact">
                <div className="likesSection">
                    <span style={{cursor:"pointer"}} onClick={handleLike}>
                         {liked? <ThumbUpAltIcon className='filledlikes'/> : <ThumbUpOffAltIcon/>}
                    </span>
                </div>
                <div className="likesSection">
                    <span style={{cursor:"pointer"}} onClick={handleHug}>
                         {hugged? <FavoriteOutlinedIcon className='filledhugs'/> : <FavoriteBorderOutlinedIcon/>}
                    </span>
                </div>

                <span style={{cursor:"pointer"}}>
                    <TextsmsOutlinedIcon/> 
                </span>

                <span style={{cursor:"pointer"}}>
                    <SendIcon/>
                </span>

        </div>

        <div className="reactionNumbers">
            <span>{likes} likes</span>
            <span>{hugs} hugs</span>
        </div>

        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
    </div>
  )
}

export default Post
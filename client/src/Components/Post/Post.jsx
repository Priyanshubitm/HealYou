import React, { useEffect, useState } from 'react'
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
import {useParams} from 'react-router-dom'
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { format } from "timeago.js";
const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
const serverside = process.env.REACT_APP_PUBLIC
const Post = ({ data }) => {
    const {user} = useSelector((state) => state.authReducer.authData);
    const [liked , setLiked] = useState(data.likes.includes(user._id));
    const [likes , setLikes] = useState(data.likes.length);
    const [hugged , setHugged] = useState(data.hugs.includes(user._id));
    const [hugs , setHugs] = useState(data.hugs.length);
    const params = useParams(); 
    const navigate = useNavigate();

    const [postUser, setUserPost] = useState([]);
    const { firstname, lastname, profilepicture } = postUser;

    useEffect(() => {
      const fetchPostUser = async () => {
        await axios
          .get(`http://localhost:4000/user/${data.userId}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("profile")).token
              }`,
            },
          })
          .then((res) => {
            setUserPost(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            // toast(err.message);
          });
      };
      fetchPostUser();
    }, [data]);
    console.log("yes");
    console.log(firstname);
    console.log(lastname);
    console.log(profilepicture);


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
        <div className="detail">
        <div style={{ display: "flex" }}>
          <img
            src={profilepicture ? serverPublic +profilepicture : serverPublic + "defaultProfile.jpeg"}
            alt=""
            style={{
              width: "40px",
              height: "40px",
              marginRight: "15px",
              borderRadius: "50%",
            }}
          />
          <div>
            <span>
              <b>{firstname + " " + lastname}</b>
            </span>
            <br />
            <span>{format(data.createdAt)}</span>
          </div>
        </div>
        <br />
        <span> {data?.desc}</span>
      </div>
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
{/* 
                <span style={{cursor:"pointer"}}>
                    <SendIcon/>
                </span> */}

        </div>

        <div className="reactionNumbers">
            <span>{likes} likes</span>
            <span>{hugs} hugs</span>
        </div>
    </div>
  )
}

export default Post
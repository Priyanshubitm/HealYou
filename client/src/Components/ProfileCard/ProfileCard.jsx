import React from 'react'
import Logo1 from "../../img/logo.png";
import Logo2 from "../../img/logo-white.png";
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Person2Icon from '@mui/icons-material/Person2';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import {Link} from 'react-router-dom';
import "./ProfileCard.css"
import { useSelector } from 'react-redux';

const ProfileCard = ({location}) => {
    const { user } = useSelector((state)=>state.authReducer.authData);
    const posts =useSelector((state)=>state.postReducer.posts)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={user.coverpicture ? serverPublic +user.coverpicture : serverPublic + "defaultCover.jpg"} alt="" />
            <img src={user.profilepicture ? serverPublic +user.profilepicture : serverPublic + "defaultProfile.jpeg"} alt="" />
        </div>
        <div className="ProfileName">
            <span>{user.firstname } {user.lastname}</span>
            <span>{user.age ? user.age : ""} {user.gender ? user.gender : ""} {user.hereto ? user.hereto : "Write About Yourself"} </span>
        </div>
        <div className='followStatus'>
        <div className="follow" >
            <div className="s-icon">
            <SensorOccupiedIcon/>
            </div>
            <span>{user.following.length}</span>
            <span>Following</span>
        </div>

        <div className="follow" >
            <div className="s-icon">
                <GroupsIcon/>
            </div>
            <span>{user.followers.length}</span>
            <span>Followers</span>
        </div>


        {location=="profilePage" && (
            <>
            <div className="follow">
            <div className="s-icon">
                <DynamicFeedIcon/>
            </div>
            <span>{posts.filter((post)=>post.userId===user._id).length}</span>
            <span>Posts</span>
            </div>
            </>
        )}
        </div>
        {/* <div className='followStatus'>
        <div className="follow" >
            <div className="s-icon">
            <Person2Icon/>
            </div>
            <span>My Profile</span>
        </div>

        <div className="follow" >
            <div className="s-icon">
                <DynamicFeedIcon/>
            </div>
            <span>Posts</span>
        </div>
        </div> */}
        {location=="profilePage"?"": <div className="My-Profile">
        <button className="button Profile-btn">
            <Link style={{textDecoration : "none" ,color:"inherit"}} to ={`/profile/${user._id}`} >My Profile</Link>
        </button>
        </div>}

    </div>

  )
}
export default ProfileCard
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '../../api/UserRequest';
import { followUser, unFollowUser } from '../../actions/UserAction';
import { Link } from "react-router-dom";

const User = ({person}) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.authReducer.authData);
    const [following ,setFollowing ] = useState(person.followers.includes(user._id));
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const handleFollow = () =>{
        following ?
        dispatch(unFollowUser(person._id,user)) :
        dispatch(followUser(person._id,user))
        setFollowing((prev)=>!prev);
    }
  return (
    <div className="follower">
      <div>
        <img
          src={
            person.profilepicture
              ? serverPublic + person.profilepicture
              : serverPublic + "defaultProfile.jpeg"
          }
          alt=""
          className="followerImage"
        />
        <div className="name">
          <Link
            to={`/profile/${person._id}`}
            style={{ textDecoration: "none",color:"black",fontWeight:"bold" }}
          >
            <span>
              {person.firstname} {person.lastname}
            </span>
          </Link>
          <span>{person.username}</span>
        </div>
      </div>
      <button className="button follower-btn" onClick={handleFollow}>
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
}

export default User
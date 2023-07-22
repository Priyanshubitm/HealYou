import React, { useEffect, useState } from 'react'
import Logo1 from "../../img/logo.png";
import Logo2 from "../../img/logo-white.png";
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Person2Icon from '@mui/icons-material/Person2';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import {Link,useParams } from 'react-router-dom';
import "./ProfileCard.css"
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import * as UserApi from "../../api/UserRequest";
import { createChat, findChat } from "../../api/ChatRequest";
import ChatIcon from '@mui/icons-material/Chat';

const ProfileCard = ({location}) => {
    const { user } = useSelector((state)=>state.authReducer.authData);
    const posts =useSelector((state)=>state.postReducer.posts)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const [currentUser, setCurrentUser] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchUser = async () => {
          if (id) {
            if (id === user._id) {
              setCurrentUser(user);
            } else {
              const profileUser = await UserApi.getUser(id);
              console.log(profileUser);
              setCurrentUser(profileUser.data);
            }
          } else {
            setCurrentUser(user);
          }
        };
        fetchUser();
      }, [id, user]);
      const currentloginid = async () => {
        const response = await fetch(' http://localhost:4000' + `/chat/find/${user._id}/${id}`)
      
        const data = await response.json()
        console.log("yes ");
        console.log(JSON.parse(data))
      
        return data;
      }
    
      const handleMessage = async() => {
        // var data= currentloginid();
        // console.log("yes " + data);
        // if(data!=null){
        //   navigate("/chat");
        // }else{
          createChat({ senderId: user._id, recieverId: id });
          navigate("/chat");
        // }
      };

      const {
        firstname,
        lastname,
        profilePicture,
        coverPicture,
        worksAt,
        followers,
        following,
      } = currentUser;
    
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img
          src={
            currentUser.coverpicture
              ? serverPublic + currentUser.coverpicture
              : serverPublic + "defaultCover.jpg"
          }
          alt=""
        />
        <img
          src={
            currentUser.profilepicture
              ? serverPublic + currentUser.profilepicture
              : serverPublic + "defaultProfile.jpeg"
          }
          alt=""
        />
      </div>
      <div className="ProfileName">
        <span>
          {currentUser.firstname} {currentUser.lastname}
        </span>
        <span>
          {currentUser.age ? currentUser.age : ""}{" "}
          {currentUser.gender ? currentUser.gender : ""}{" "}
          {currentUser.hereto ? currentUser.hereto : "Write About Yourself"}{" "}
        </span>
      </div>
      <div className="followStatus">
        <div className="follow">
          <div className="s-icon">
            <SensorOccupiedIcon />
          </div>
          <span>{following?.length}</span>
          <span>Following</span>
        </div>

        <div className="follow">
          <div className="s-icon">
            <GroupsIcon />
          </div>
          <span>{followers?.length}</span>
          <span>Followers</span>
        </div>

        {location == "profilePage" && (
          <>
            <div className="follow">
              <div className="s-icon">
                <DynamicFeedIcon />
              </div>
              <span>{posts?.filter((post) => post?.userId === id).length}</span>
              <span>Posts</span>
            </div>
          </>
        )}

              {location === "profilePage" && id !== user._id && (
                  <>
                      <div className="follow" onClick={handleMessage}>
                          <div className="s-icon">

                              <ChatIcon
                                  style={{
                                      width: "25px",
                                      height: "25px",
                                      cursor: "pointer",
                                  }}
                              />
                          </div>
                          <span>Chat</span>
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
      {location == "profilePage" ? (
        ""
      ) : (
        <div className="My-Profile">
          <button className="button Profile-btn">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={`/profile/${user._id}`}
            >
              My Profile
            </Link>
          </button>
        </div>
      )}
    </div>
  );
}
export default ProfileCard
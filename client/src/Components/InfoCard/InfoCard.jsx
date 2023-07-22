import React, {useState} from 'react'
import "./InfoCard.css"
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ProfileModal from '../ProfileModal';
import { useDispatch, useSelector } from 'react-redux';
import {useParams } from 'react-router-dom';
import { useEffect } from 'react';
import * as UserApi from '../../api/UserRequest.js'
import { logOut } from '../../actions/AuthAction.js';
import { format } from "timeago.js";
const InfoCard = () => {
    const[modalOpened , setModalOpened] = useState(false);
    const dispatch = useDispatch();
    const params = useParams();

    const profileUserId = params.id;
    const [profileUser , setProfileUser] = useState({});
    const {user} = useSelector((state) =>state.authReducer.authData);

    useEffect(() => {
        const fetchProfileUser = async () => {
          if (profileUserId === user._id) {
            setProfileUser(user);
          } else {
            // console.log("fetching");
            const profileUser = await UserApi.getUser(profileUserId);
            setProfileUser(profileUser.data);
          }
        };
        fetchProfileUser();
      }, [user, profileUserId]);

    const handleLogOut = ()=>{
        dispatch(logOut())
    }

    const { about, livesIn, worksAt, relationship, createdAt, country } =
    profileUser;
  return (
    <div className="InfoCard">
        <div className="InfoHead">
            <h4>User Info</h4>
             {user._id === profileUserId ? ( <div>
                 <ModeEditIcon className='edit-icon' onClick={()=>setModalOpened(true)} />
                 <ProfileModal
                 modalOpened ={modalOpened}
                 setModalOpened ={setModalOpened}
                 data ={user}
                 />
            </div>): ("")}
        </div>

        <div className="Info">
            <span>
                <b>Age </b>
            </span>
            <span>{profileUser.age}</span>
        </div>
        <div className="Info">
            <span>
                <b>Gender </b>
            </span>
            <span>{profileUser.gender}</span>
        </div>

        <div className="Info">
            <span>
                <b>Talks About </b>
            </span>
            <span>{profileUser.talksabout}</span>
        </div>
        <div className="Info">
            <span>
                <b>Lives In </b>
            </span>
            <span>{profileUser.livesin}</span>
        </div>
        <div className="Info">
            <span>
                <b>Here for </b>
            </span>
            <span>{profileUser.hereto}</span>
        </div>
        <div className="Info">
            <span>
                <b>Joined HealYou </b>
            </span>
            <span>{format(createdAt)}</span>
        </div>
        {user._id === profileUserId ? (
        <button className="button logout-btn" onClick={handleLogOut}>
          Logout
        </button>
      ) : (
        ""
      )}
    </div>
  )
}

export default InfoCard
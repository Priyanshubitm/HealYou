import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard';
import ProfileCard from '../ProfileCard/ProfileCard'
import "./ProfileSide.css";
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import { color } from '@mui/system';
import {Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
       <NavBar/>
      <ProfileCard/>
      <FollowersCard/>
    </div>
  )
}

export default ProfileSide
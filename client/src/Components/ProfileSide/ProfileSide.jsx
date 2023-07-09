import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard';
import ProfileCard from '../ProfileCard/ProfileCard'
import "./ProfileSide.css";
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import { color } from '@mui/system';

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
       <div className="navBar">
           <HomeIcon style={{ fontSize: '2.1rem'}} className='navIcons'/>
           <NotificationsIcon style={{ fontSize: '2.1rem' }} className='navIcons'/>           
           <ChatIcon style={{ fontSize: '2.1rem' }} className='navIcons'/>
           <SettingsIcon style={{ fontSize: '2.1rem' }} className='navIcons'/>
       </div>
      <ProfileCard/>
      <FollowersCard/>
    </div>
  )
}

export default ProfileSide
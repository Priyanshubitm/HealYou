import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { color } from '@mui/system';
import "./NavBar.css"

import {Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  // user._id
  console.log(user._id);
  return (
        <div className="navBar">
          <Link to='../home'>
            <HomeIcon style={{ fontSize: '2.1rem' ,color:"black"}} className='navIcons'/>
          </Link>
          <Link to="/follower">
           <PeopleAltIcon style={{ fontSize: '2.1rem' ,color:"black"}} className='navIcons'/> 
           </Link>
           <Link to='../chat'>   
              <ChatIcon style={{ fontSize: '2.1rem' ,color:"black"}} className='navIcons'/>
           </Link>
           <Link to={`../profile/${user._id}`} >
           <AccountCircleIcon style={{ fontSize: '2.1rem' ,color:"black"}} className='navIcons'/>
           </Link>
    </div>
  )
}

export default NavBar
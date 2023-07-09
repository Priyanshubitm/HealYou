import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import { color } from '@mui/system';
import "./NavBar.css"

import {Link } from 'react-router-dom';

const NavBar = () => {
  return (
        <div className="navBar">
          <Link to='../home'>
            <HomeIcon style={{ fontSize: '2.1rem' ,color:"black"}} className='navIcons'/>
          </Link>
           <NotificationsIcon style={{ fontSize: '2.1rem' ,color:"black"}} className='navIcons'/>           
           <ChatIcon style={{ fontSize: '2.1rem' ,color:"black"}} className='navIcons'/>
           <SettingsIcon style={{ fontSize: '2.1rem' ,color:"black"}} className='navIcons'/>
    </div>
  )
}

export default NavBar
import React from 'react'
import NavSide from '../../Components/NavSide/NavSide'
import PostSide from '../../Components/PostSide/PostSide'
import ProfileSide from '../../Components/ProfileSide/ProfileSide'
import { useState } from 'react';

import "./Home.css"



const Home = () => {
  return (
    <div className="Home">
        <NavSide/>
        <PostSide/>
        <ProfileSide/>
    </div>
  )
}

export default Home
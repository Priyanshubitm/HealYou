import React from 'react'
import PostSide from '../../Components/PostSide/PostSide'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import ProfileLeft from '../../Components/ProfileLeft/ProfileLeft'
import ProfileRight from '../../Components/ProfileRight/ProfileRight'
import "./Profile.css"

const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft/>
        <div className="Profile-center">
            <ProfileCard location= "profilePage"/>
            <PostSide/>
        </div>
        <ProfileRight/>
    </div>
  )
}

export default Profile
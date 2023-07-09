import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'
import NavBar from '../NavBar/NavBar'
import "./ProfileRight.css"

const ProfileRight = () => {
  return (
    <div className="ProfileRight">
        <NavBar/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileRight
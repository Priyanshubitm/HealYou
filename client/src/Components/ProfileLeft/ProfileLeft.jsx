import React from 'react'
import HelpBar from '../HelpBar/HelpBar'
import LogoSearch from '../LogoSearch/LogoSearch'
import TrendCard from '../TrendCard/TrendCard'
import "./ProfileLeft.css"

const ProfileLeft = () => {
  return (
    <div className="ProfileLeft">
        <LogoSearch/>
        <HelpBar/>
        <TrendCard/>
    </div>
  )
}

export default ProfileLeft
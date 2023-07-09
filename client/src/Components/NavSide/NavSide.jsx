import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import TrendCard from '../TrendCard/TrendCard'
import { useState } from 'react';
import "./NavSide.css"
import HelpBar from '../HelpBar/HelpBar';



const NavSide = () => {
  return (
    <div className="NavSide">
       <LogoSearch/>
       <HelpBar/>
       <TrendCard/>
    </div>
  )
}

export default NavSide
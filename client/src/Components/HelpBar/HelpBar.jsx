import React from 'react'
import "./HelpBar.css"
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import RssFeedOutlinedIcon from '@mui/icons-material/RssFeedOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


const HelpBar = () => {
    
  return (
    <div className="HelpBar">
         <div className="nav">

            <div className='hbar'>
                <SpaOutlinedIcon style={{ color: '9932CC'}}/>
                <a href="wellness-centre">Wellness Centre</a>
            </div>

            <div className='hbar'>
                <HealthAndSafetyOutlinedIcon style={{ color: '9932CC'}}/>
                <a href="safety-centre">Safety Centre</a>
            </div>
            <div className='hbar'>
                <SpaOutlinedIcon style={{ color: '9932CC'}}/>
                <a href="i-need-help">I Need Help</a>
            </div>
            <div className='hbar'>
                <RssFeedOutlinedIcon style={{ color: '9932CC'}}/>
                <a href="healyou-blog">HealYou Blog</a>
            </div>
            <div className='hbar'>
                <InfoOutlinedIcon style={{ color: '9932CC'}}/>
                <a href="about-us">About HealYou</a>
            </div>
         </div>
    </div>
  )
}

export default HelpBar
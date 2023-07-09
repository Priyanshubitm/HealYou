import React from 'react'
import "./LogoSearch.css"
import Logo from "../../img/logo-no-background.png";
import SearchIcon from '@mui/icons-material/Search';

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
        <img src={Logo} alt="" />
        <div className="Search" >
            <input type="text" name="" placeholder='#Search' />
            <div className="s-icon">
                <SearchIcon />
            </div>
        </div>
    </div>
  )
}

export default LogoSearch



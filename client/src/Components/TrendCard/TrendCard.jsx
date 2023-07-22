import React from 'react'
import "./TrendCard.css"

import { TrendData } from '../../Data/TrendData';

const TrendCard = () => {
  return (
    <div className="TrendCard">
        <h2>Today's Trends</h2>
        {TrendData.map((trend)=>{
            return(
                <div className="trend">
                    <span>#{trend.name}</span>
                    <span> {trend.shares} Shares</span>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCard
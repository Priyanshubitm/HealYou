import React from 'react'
import "./FollowersCard.css"
import { Followers } from "../../Data/FollowersData"



const FollowersCard = () => {
  return (
    <div className="FollowersCard">
        <h2>Your Followers</h2>

        {Followers.map((follower,id)=>{
            return(
                <div className="follower">
                    <div>
                        <img src={follower.img} alt="" className="followerImage" />
                        <div className="name">
                            <span>{follower.name}</span>
                            <span>{follower.username}</span>
                        </div>
                    </div>
                    <button className="button follower-btn">
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard
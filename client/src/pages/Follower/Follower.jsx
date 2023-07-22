import React from "react";
import FollowersCard from "../../Components/FollowersCard/FollowersCard";
import NavSide from "../../Components/NavSide/NavSide";
import ProfileSide from "../../Components/ProfileSide/ProfileSide";

import './Follower.css'

const Follower = () => {
  return (
    <div className="Follower">
        <NavSide location={"follower"} />
        <FollowersCard location={"h89"} />
        <ProfileSide location={true}/>
    </div>
  );
};

export default Follower;
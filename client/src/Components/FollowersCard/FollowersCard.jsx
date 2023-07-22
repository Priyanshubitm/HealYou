import React, { useState } from 'react'
import "./FollowersCard.css"
import { Followers } from "../../Data/FollowersData"
import User from '../User/User'
import { getAllUser } from '../../api/UserRequest'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import FollowersModal from '../FollowerModal/FollowerModal.jsx'



const FollowersCard = ({location}) => {
    const [persons , setPersons] = useState([]);
    const [modalOpened, setModalOpened] = useState(false);
    const { user } = useSelector((state) => state.authReducer.authData);
    useEffect(()=>{
        const fetchPersons = async()=>{
            const {data} = await getAllUser();
            setPersons(data);
            console.log(data);
        }
        fetchPersons();
    },[]);
  return (
    <div className={`FollowersCard ${location === "h89" ? "h89" : ""}`}>
        <h2>People you may know</h2>

        {location !== "h89" &&
          persons.slice(0, 5)?.map((person) => {
            if (person._id !== user._id)
              return <User person={person} key={person._id} />;
          })}

        {location === "h89" &&
          persons?.map((person) => {
            if (person._id !== user._id)
              return <User person={person} key={person._id} />;
          })}
        {!location ? (
          <span onClick={() => setModalOpened(true)}>Show more</span>
        ) : (
          ""
        )}

        <FollowersModal
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
        />
    </div>
  );
}

export default FollowersCard
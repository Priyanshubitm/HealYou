import React, {useState} from 'react'
import "./InfoCard.css"
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ProfileModal from '../ProfileModal';
const InfoCard = () => {

    const[modalOpened , setModalOpened] = useState(false);



  return (
    <div className="InfoCard">
        <div className="InfoHead">
            <h4>Your Info</h4>
            <div>
                 <ModeEditIcon className='edit-icon' onClick={()=>setModalOpened(true)} />
                 <ProfileModal
                 modalOpened ={modalOpened}
                 setModalOpened ={setModalOpened}
                 />
            </div>
        </div>

        <div className="Info">
            <span>
                <b>Age </b>
            </span>
            <span>25</span>
        </div>
        <div className="Info">
            <span>
                <b>Gender </b>
            </span>
            <span>Male</span>
        </div>

        <div className="Info">
            <span>
                <b>Talks About </b>
            </span>
            <span>Happiness</span>
        </div>
        <div className="Info">
            <span>
                <b>Here for </b>
            </span>
            <span>Help</span>
        </div>
        <button className="button logout-btn">
            Logout
         </button>
    </div>
  )
}

export default InfoCard
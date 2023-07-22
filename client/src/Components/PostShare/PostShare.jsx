import React, {useState, useRef} from 'react'
import "./PostShare.css"
import ProfileImg from "../../img/logo-black.png"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, uploadPost  } from '../../actions/UploadAction';
import { toast } from "react-toastify";


const PostShare = () => {
  const loading = useSelector((state) => state.postReducer.uploading);
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const {user} = useSelector((state)=>state.authReducer.authData);
  const desc =useRef();
  const dispatch = useDispatch();
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
  const onImageChange =(event)=>{
    if(event.target.files && event.target.files[0]){
        let img = event.target.files[0];
        setImage(img)
    }
  }
  const reset = ()=>{
    setImage(null);
    desc.current.value ="";
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    toast.success("UPLOAD SUCCESS");
    const newPost = {
        userId:user._id,
        desc :desc.current.value
    }
    if(image){
        const data = new FormData();
        const filename =Date.now() +image.name;
        data.append("name",filename);
        data.append("file",image);
        newPost.image =filename;
        // console.log(newPost);
        try {
            dispatch(uploadImage(data));
            toast.success("IMAGE UPLOAD SUCCESS");
        } catch (error) {
            console.log(error);
        }
    }
    dispatch(uploadPost(newPost));
    toast.success("UPLOAD SUCCESS");
    reset();
  }

  return (
    <div className="PostShare">
        <img src={user.profilepicture ? serverPublic +user.profilepicture : serverPublic + "defaultProfile.jpeg"} alt="" />
        <div className="PostText">
            <input 
            ref={desc}
            required
            type="text" placeholder="Write a Post..." />
            <div className="PostOptions">
            <div className="Option Photo"
            onClick={()=>imageRef.current.click()}
            >
                <AddPhotoAlternateIcon/>
                Photo
            </div>
            <div className="Option Video"
             onClick={()=>imageRef.current.click()}>
                <VideoLibraryIcon/>
                GIF
            </div>
            
            <button className="button PostShare-btn" onClick={handleSubmit} disabled={loading}>
                {loading ? "Uploading.." : "Share"}
            </button>
            <div style={{display: "none"}}>
                <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
            </div>
        </div>
        {image && 

         <div className="previewImage">
            <HighlightOffIcon onClick={()=>setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="" />
        </div>

        }
        </div>
    </div>
  )
}

export default PostShare
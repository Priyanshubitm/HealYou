import React, { useState } from 'react'
import "./Auth.css";
import logo from "../../img/logo-no-background.png";
import { useDispatch, useSelector } from 'react-redux';
import { logIn, signUp } from '../../actions/AuthAction.js';

const Auth = () => {
  const loading = useSelector((state) => state.authReducer.loading);
  const dispatch =useDispatch();
  const [isSignup, setIsSignUp] =useState(true);
  console.log(loading);

  const [data, setData] = useState({firstname:"" , lastname:"" , username:"", password:"" ,confirmpass:""});
  const [confirmPass, setConfirmPass] =useState(true);
  const handleChange =(e)=>{
    setData({...data ,[e.target.name]:e.target.value})
  }

  const handleSubmit =(e)=>{
    e.preventDefault();

    if(isSignup){
      data.password === data.confirmpass? dispatch(signUp(data)) : setConfirmPass(false);
    }else{
      dispatch(logIn(data))
    }
  }
  const resetForm = ()=>{
    setConfirmPass(true);
    setData({firstname:"" , lastname:"" , username:"", password:"" ,confirmpass:""})
  }
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={logo} alt="" />
            <div className="Webname">
                <h1>HealYou</h1>
                <h6>PRIORITISE YOUR PEACE!</h6>
            </div>
        </div>
        {/* <SignUp/> */}
        {/* <LogIn/> */}
        <div className="a-right">
            <form action="" className="infoForm authForm" onSubmit={handleSubmit} >
                <h2>{isSignup ? "Sign Up" : "Log In"}</h2>

                {isSignup && (
                  <div>
                  <input type="text" 
                  placeholder='First Name' 
                  className="infoInput" 
                  name='firstname'
                  onChange={handleChange}
                  value ={data.firstname}
                  />
                  <input type="text" 
                  placeholder='Last Name' 
                  className="infoInput" 
                  name='lastname'
                  onChange={handleChange}
                  value ={data.lastname}
                  />
              </div>
                )}


                <div>
                <input type="text" 
                    placeholder='Username' 
                    className="infoInput" 
                    name='username'
                    onChange={handleChange}
                    value ={data.username}
                    />
                </div>

                <div>
                    <input type="password" 
                    placeholder='Password' 
                    className="infoInput" 
                    name='password'
                    onChange={handleChange}
                    value ={data.password}
                    />
                    {isSignup && (
                  <input type="password" 
                  placeholder='Confirm Password' 
                  className="infoInput" 
                  name='confirmpass'
                  onChange={handleChange}
                  value ={data.confirmpass}
                  />
                )}
                 
                </div>
                <span
                style={{
                  display:confirmPass?"none":"block",
                  color:"red",
                  alignSelf:"flex-end",
                  marginRight:"5px",
                  fontSize:"12px"
                }}
                >
                  * Confirm Password is not same
                </span>
                <div>
                    <span className='AlreadySpan' onClick={()=>{setIsSignUp((prev)=>!prev) ; resetForm()}} style={{cursor:"pointer"}} >{isSignup ? "Already have an account Warrior? LogIn!" : "Don't have an account? SignUp!"}</span>
                </div>
                <button className="button infoButton" type='submit' disabled= {loading}>
                  { loading ? "Loading.." : isSignup ? "Sign Up" : "Log In"}</button>
            </form>
        </div>
    </div>
  )
}


export default Auth
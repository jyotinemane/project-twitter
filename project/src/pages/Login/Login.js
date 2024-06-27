import React, {useState} from 'react'
import iconT from "../../assets/images/photo-1596550190729-1d9225e788dd.avif"
import {useSignInWithEmailAndPassword, useSignInWithGoogle} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import Feed from '../sidebar/Feed/Feed';
import "./Login.css";
import '../../App.css';


export default function Login() {

  
  const [email1, setEmail1]=useState('');
  const [password, setPassword]=useState('');
  const navigate = useNavigate();

   
  const [
      signInwithEmailAndPassword,
      user,
      loading,
      error,
  ] = useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
 
  if (user || googleUser) {
    navigate("./Feed")
    console.log(user)
    console.log(googleUser)
  }
  if(error){
    console.log(error)
  }
  if(loading){
    console.log("loading....")
  }
  const handleSubmit = e => {
    e.preventDefault();
    console.log(email1, password);
    signInwithEmailAndPassword(email1, password)
   }

   const handleGoogleSignIn = () => {
    signInWithGoogle();
  }
    
  return (
    <>
    <div className='login-container'>
    <div className="image-container" style={{textAlign:"center",marginLeft:"40px"}}>
      
      <img className="ms-auto image " 
       src={iconT} alt=''/>
    </div>
    <div className="form-container" style={{textAlign:"center"}}>
    <div className="form-box" style={{marginTop: '-150px'}}>
    <i class="bi bi-twitter " style={{fontSize:"50px", color: "skyblue"}}></i>
    <h2 className='heading'>Happing now</h2>
    <h3 className="heading1">What happing today</h3>
    <form onSubmit={handleSubmit}>
    <input type="email"
        className='email'
        placeholder='Email address'
        onChange={(e)=> setEmail1(e.target.value)}
         />
    
        <input 
        type="password"
        className='password'
        placeholder='password'
        onChange={(e)=> setEmail1(e.target.value)}
         />
        <div className="btn-login">
            <button type='submit' style={{backgroundColor: 'rgb(92, 199, 243)'}} className='btn'>Login</button>
        </div>
      </form>
      </div>
      <hr />
          <div className="google-button ">
            <GoogleButton className="g-btn"
           type="light" 
           onClick={handleGoogleSignIn}
           />
          </div>
          <div>
             Don't have an account?
            <Link
              to="/signup"
              style={{
                textDecoration: "none",
                color: "skyblue",
                fontWeight: "600",
                marginLeft: "5px",
              }}
            >
              Sign Up
            </Link>
            </div>
          </div>
    </div>
    </>
  )
}

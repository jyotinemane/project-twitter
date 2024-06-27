import React from 'react';
// import Outlet from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
import auth from "../firebase.init";

export default function Home1() {
  const user = useAuthState(auth);
  

  const handleLoggout = () =>{
    signOut(user);
  }
  return (
      <div className="row">
        <div className="col-sm-4">                                       
         
      {/* <Sidebar handleLogout={handleLogout} user={user}/> */}
        </div>
        <div className="col-sm-4">
    

        </div>
      </div>

  )
}

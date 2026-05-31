import React from 'react';
import { Link } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import { useState } from "react";

export const Signup = () => {

  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  }

  return (
   <div className="container">
     <h1>Signup</h1>
     <ToastContainer />

        <form>
          <div >

            <label htmlFor="name">Name</label>
            <input

             type="text" 
                    name="name"
                    autoFocus
                    placeholder="Enter your name"
                    onChange={handleChange}
                     />
          </div>
          <div >

            <label htmlFor="email">Email</label>
            <input type="email" 
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                     />
          </div>
          <div >

            <label htmlFor="password">Password</label>
            <input type="password" 
                    name="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
                     />
          </div>
          <button>Signup</button>
          <span>Already have an account? <Link to="/login">Login</Link></span>
        </form>
        <ToastContainer />
   </div>
  )
}

export default Signup;

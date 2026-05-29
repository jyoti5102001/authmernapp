import React from 'react'

export const Signup = () => {
  return (
   <div className="container">
     <h1>Signup</h1>
        <form>
          <div >

            <label htmlFor="name">Name</label>
            <input type="text" 
                    name="name"
                    autoFocus
                    placeholder="Enter your name"
                     />
          </div>
          <div >

            <label htmlFor="email">Email</label>
            <input type="email" 
                    name="email"
                    placeholder="Enter your email"
                     />
          </div>
          <div >

            <label htmlFor="password">Password</label>
            <input type="password" 
                    name="password"
                    placeholder="Enter your password"
                     />
          </div>
          <button type="submit" className="btn btn-primary">Signup</button>
        </form>
   </div>
  )
}

export default Signup;

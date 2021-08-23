import React, { useEffect } from 'react'

const Signup = () => {

  return (
    <>
      <div className="background">
        <div className="container">
          <div className="heading">
            <h1>Register</h1>
          </div>
          <form action="" className="form">
            <input type="text" placeholder="name" className="input" />
            <input type="text" placeholder="example@gmail.com" className="input" />
            <input type="text" placeholder="+91 123456789" className="input" />
            <input type="text" placeholder="new password" className="input" />
            <input type="text" placeholder="confirm password" className="input" />
            <input type="text" placeholder="API key" className="input" />
            <input type="submit" className="submit" value="Register" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup

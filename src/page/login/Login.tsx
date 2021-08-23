import React from 'react'

const Login = () => {

  return (
    <div className="background">
      <div className="container">
        <div className="heading">
          <h1>Login</h1>
        </div>
        <form action="" className="form">
          <input type="text" placeholder="example@gmail.com" className="input" />
          <input type="text" placeholder="password" className="input" />
          <input type="submit" className="submit" value="Login" />
        </form>
        <div className="register-link" >
          <p>new user? register</p>
        </div>
      </div>
    </div>
  )
}

export default Login

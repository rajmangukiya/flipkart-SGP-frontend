import React, { useEffect } from 'react'
import { useState } from 'react'
import { Redirect } from 'react-router';
import { ApiPostNoAuth } from '../../helper/api/ApiData';

interface FormData {
  first_name: string,
  last_name: string,
  email: string,
  mobile: string,
  password: string,
  api_key: string,
}

const Signup = () => {

  const [formData, setFormData] = useState<FormData>();
  const [confirmPwd, setConfirmPwd] = useState<string>();

  const handleFormChange = (e: any, name: string) => {
    setFormData((prev: any) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSignup = async (e: any) => {
    try {
      e.preventDefault();
      const data = await ApiPostNoAuth('user/auth/signup', formData)
      window.location.href = '/login';
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="background">
        <div className="container">
          <div className="heading">
            <h1>Register</h1>
          </div>
          <form action="" className="form">
            <input type="text" name="first_name" placeholder="first name" className="input" value={formData?.first_name} onChange={(e) => handleFormChange(e, "first_name")} />
            <input type="text" name="last_name" placeholder="last name" className="input" value={formData?.last_name} onChange={(e) => handleFormChange(e, "last_name")} />
            <input type="text" name="email" placeholder="example@gmail.com" className="input" value={formData?.email} onChange={(e) => handleFormChange(e, "email")} />
            <input type="text" name="mobile" placeholder="123456789" className="input" value={formData?.mobile} onChange={(e) => handleFormChange(e, "mobile")} />
            <input type="text" name="password" placeholder="new password" className="input" value={formData?.password} onChange={(e) => handleFormChange(e, "password")} />
            <input type="text" name="confirm_password" placeholder="confirm password" className="input" value={confirmPwd} />
            <input type="text" name="api_key" placeholder="API key" className="input" value={formData?.api_key} onChange={(e) => handleFormChange(e, "api_key")} />
            <input type="submit" className="submit" value="Register" onClick={(e) => handleSignup(e)} />
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup

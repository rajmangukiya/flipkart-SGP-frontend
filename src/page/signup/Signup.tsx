import React, { useEffect } from 'react'
import { useState } from 'react'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { ApiPostNoAuth } from '../../helper/api/ApiData';

interface FormData {
  first_name: string,
  last_name: string,
  email: string,
  mobile: string,
  password: string,
  api_key: string,
}

interface FormError {
  first_name: boolean,
  last_name: boolean,
  email: boolean,
  mobile: boolean,
  password: boolean,
  api_key: boolean,
}

const Signup = () => {

  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    password: "",
    api_key: "",
  });
  const [confirmPwd, setConfirmPwd] = useState<string>();
  const [pwdError, setPwdError] = useState(false);
  const [formError, setFormError] = useState<FormError>({
    first_name: true,
    last_name: true,
    email: true,
    mobile: true,
    password: true,
    api_key: true,
  });

  const handleFormError = () => {
    setFormError({
      first_name: true,
      last_name: true,
      email: !((/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(formData?.email)),
      mobile: !((/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/).test(formData?.mobile)),
      password: true,
      api_key: true,
    })
  }

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
      if (formData?.password != confirmPwd) {
        setPwdError(true);
        return;
      }
      const data = await ApiPostNoAuth('user/auth/signup', formData)
      window.location.href = '/login';
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    formData?.password === confirmPwd && setPwdError(false);
  }, [confirmPwd, formData?.password])

  return (
    <>
      <div className="background">
        <div className="container">
          <div className="heading">
            <h1>Register</h1>
          </div>
          <form action="" className="form">
            <input
              type="text"
              name="first_name"
              placeholder="first name"
              className="input"
              value={formData?.first_name}
              onChange={(e) => handleFormChange(e, "first_name")}
            />
            <input
              type="text"
              name="last_name"
              placeholder="last name"
              className="input"
              value={formData?.last_name}
              onChange={(e) => handleFormChange(e, "last_name")}
            />
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="input"
              value={formData?.email}
              onChange={(e) => handleFormChange(e, "email")}
            />
            <input
              type="tel"
              name="mobile"
              placeholder="123456789"
              className="input"
              value={formData?.mobile}
              onChange={(e) => handleFormChange(e, "mobile")}
            />
            <input
              type="password"
              name="password"
              placeholder="new password"
              className="input"
              value={formData?.password}
              onChange={(e) => handleFormChange(e, "password")}
            />
            <input
              type="password"
              name="confirm_password"
              placeholder="confirm password"
              className="input"
              value={confirmPwd}
              onChange={(e) => setConfirmPwd(e.target.value)}
            />
            <input
              type="text"
              name="api_key"
              placeholder="API key"
              className="input"
              value={formData?.api_key}
              onChange={(e) => handleFormChange(e, "api_key")}
            />
            {
              pwdError ?
                <div className="error">both password should be same</div>
                : ""
            }
            <input
              type="submit"
              className="submit"
              value="Register"
              onClick={(e) => handleSignup(e)} />
            <div>
              <Link className="register-link" to="/login">already user? login</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Redirect, useHistory } from 'react-router-dom'
import STORAGEKEY from '../../config/storageKey'
import { ApiPostNoAuth } from '../../helper/api/ApiData'
import AuthStorage from '../../helper/auth/AuthStorage'
import { changeLoginState } from '../../redux/action/loginAction'

interface FormData {
  email: string,
  password: string
}

const Login = () => {

  const [formData, setFormData] = useState<FormData>();
  const history = useHistory();
  const dispatch = useDispatch()

  const handleLogin = async (e: any) => {
    try {
      e.preventDefault();
      const res: any = await ApiPostNoAuth('user/auth/login', formData);
      AuthStorage.setStorageJsonData(STORAGEKEY.token, res?.data, true);
      dispatch(changeLoginState(true));
      history.push('/orders');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="background">
      <div className="container">
        <div className="heading">
          <h1>Login</h1>
        </div>
        <form action="" className="form">
          <input
            type="text"
            placeholder="example@gmail.com"
            className="input"
            value={formData?.email}
            onChange={(e) => setFormData((prev: any) => (
              {
                ...prev,
                email: e.target.value
              }
            ))}
          />
          <input
            type="password"
            placeholder="password"
            className="input"
            value={formData?.password}
            onChange={(e: any) => setFormData((prev: any) => (
              {
                ...prev,
                password: e.target.value
              }
            ))}
          />
          <input
            type="submit"
            className="submit"
            value="Login"
            onClick={(e) => handleLogin(e)}
          />
        </form>
        <div>
          <Link className="register-link" to="/signup">new user? register</Link>
        </div>
      </div>
    </div>
  )
}

export default Login

import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import STORAGEKEY from '../../config/storageKey'
import { ApiPostNoAuth } from '../../helper/api/ApiData'
import AuthStorage from '../../helper/auth/AuthStorage'
import { changeLoginState } from '../../redux/action/loginAction'

interface FormData {
  email: string,
  password: string
}

const Login = () => {

  const [formData, setFormData] = useState<FormData>()
  const [error, setError] = useState<Boolean>(false)
  const history = useHistory()
  const dispatch = useDispatch()
  const inputRef: any = useRef(null)

  const handleLogin = async (e: any) => {
    try {
      e.preventDefault();
      const res: any = await ApiPostNoAuth('user/auth/login', formData);
      AuthStorage.setStorageJsonData(STORAGEKEY.token, res?.data, true);
      dispatch(changeLoginState(true));
      history.push('/orders');
    } catch (error) {
      setError(true)
      console.log(error);
    }
  }

  const handleVisibility = () => {
    const type = inputRef.current.getAttribute('type') === 'password' ? 'text' : 'password';
    inputRef.current.setAttribute('type', type)
  }

  useEffect(() => {
    if(AuthStorage.isUserAuthenticated()) {
      history.push('/orders')
    }
  }, [])

  return (
    <div className="background">
      <div className="login-container">
        <div className="heading">
          <h1>Login</h1>
        </div>
        <form action="" className="form px-5">
          <input
            type="text"
            placeholder="example@gmail.com"
            className="w-100 bg-light p-2 rounded-3 mb-3"
            value={formData?.email}
            onChange={(e) => setFormData((prev: any) => {
              setError(false)
              return {
                ...prev,
                email: e.target.value
              }
            })}
          />
          <div className="d-flex align-items-center w-100 mb-3">

            <input
              ref={inputRef}
              type="password"
              placeholder="password"
              className="p-2 bg-light rounded-start w-100"
              value={formData?.password}
              onChange={(e: any) => setFormData((prev: any) => {
                setError(false)
                return {
                  ...prev,
                  password: e.target.value
                }
              })}
            />
            <div className="bg-light d-flex justify-content-center p-2 rounded-end" style={{cursor: 'pointer'}}onClick={handleVisibility}>
              <div className="material-icons">
                visibility
              </div>
            </div>
          </div>
          {error ?
            <div className="text-danger mb-3">incorrect email or password</div>
            :
            ""
          }
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

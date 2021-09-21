import React, { useEffect, useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import AuthStorage from '../../helper/auth/AuthStorage';
import { changeLoginState } from '../../redux/action/loginAction';
import { getUserData } from '../../redux/action/userDataAction';

const Header = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const { is_loggedin } = useSelector((state: RootStateOrAny) => state.is_loggedin);

  const logoutHelper = () => {
    AuthStorage.deauthenticateUser();
    dispatch(changeLoginState(false));
    history.push('/login')
  }

  useEffect(() => {
    AuthStorage.isUserAuthenticated() && dispatch(getUserData());
  }, [])

  useEffect(() => {
    dispatch(changeLoginState(AuthStorage.isUserAuthenticated()));
  }, [AuthStorage.isUserAuthenticated()])

  return (
    <div className="main-header">
      <h1>Flipkart Handler</h1>
      {
        is_loggedin &&
         <button onClick={logoutHelper} className="btn-logout">logout</button>
      }
    </div>
  )
}

export default Header

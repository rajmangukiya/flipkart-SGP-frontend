import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUserData } from '../../redux/action/userDataAction';

const Header = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());    
  }, [])

  return (
    <div className="main-header">
      <h1>Flipkart Handler</h1>
    </div>
  )
}

export default Header

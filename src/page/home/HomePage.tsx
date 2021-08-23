import React, { useEffect } from 'react'
import { useState } from 'react'
import { Redirect } from 'react-router'
import AuthStorage from '../../helper/auth/AuthStorage'

const HomePage = () => {

  return (
    <div>
      {
        AuthStorage.isUserAuthenticated()
        ? <Redirect from="/" to="/orders" />
        : <Redirect from="/" to="/login" />
      }
    </div>
  )
}

export default HomePage

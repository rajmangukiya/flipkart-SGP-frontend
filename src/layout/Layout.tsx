import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './header/Header'

interface Props {
  
}

const Layout: FC<Props> = ({ children, ...props}) => {

  return (
    <div>
      {
        <Header />
      }
      <div {...props}>
        { children }
      </div>
    </div>
  )
}

export default Layout

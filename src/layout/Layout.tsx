import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './header/Header'

interface Props {
  
}

const Layout: FC<Props> = ({ children, ...props}) => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount((prev) => prev + 1)
    console.log(`layout running ${count}`);
  }, [])

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

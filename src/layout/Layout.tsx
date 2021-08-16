import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  
}

const Layout: FC<Props> = ({ children, ...props}) => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount((prev) => prev + 1)
    console.log(`layout running ${count}`);
  }, [])

  return (
    <>
      <div {...props}>
        { children }
      </div>
    </>
  )
}

export default Layout

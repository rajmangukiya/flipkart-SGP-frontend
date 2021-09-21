import React from 'react'
import { useParams } from 'react-router'

const ManageOrder = () => {

  const {id}: any = useParams()

  return (
    <div>
      {id}
    </div>
  )
}

export default ManageOrder

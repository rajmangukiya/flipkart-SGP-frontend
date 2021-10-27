import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { ApiGet } from '../../helper/api/ApiData'

const ManageOrder = () => {

  const [order, setOrder] = useState<any>()

  const { id }: any = useParams()
  const history = useHistory()

  const getOrder = async () => {
    const { data }: any = await ApiGet(`order/get-order?orderId=${id}`);
    setOrder(data)
  }

  const backButton = () => {
    history.push(`/orders`);
  }

  useEffect(() => {
    getOrder()
  }, [])

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between">
        <button onClick={backButton} className="btn-lg btn-primary text-light px-5 fs-4">back</button>
        <h1><span className="text-dark">odrer Id : </span><span className="text-primary">{order?.order_id}</span></h1>
      </div>
      <div className="py-5">
        {
          order && Object.keys(order).map((property: any) => (
            <div className="d-flex my-3">
              <div style={{ width: '300px' }} className="bg-primary py-2 text-light rounded-start fs-5">{property}</div>
              <div className="bg-light flex-grow-1 text-start px-5 py-2 rounded-end fs-5 text-dark">{order[property]}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ManageOrder

import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { ApiGet } from '../../helper/api/ApiData'

const ManageReturnOrder = () => {

  const [returnOrder, setReturnOrder] = useState<any>()

  const { id }: any = useParams()
  const history = useHistory()

  const getOrder = async () => {
    const { data }: any = await ApiGet(`return-order/get-return-order?orderId=${id}`);
    setReturnOrder({
      ...data,
      completed_date: moment(data?.completed_date).calendar().toString(),
      created_at: moment(data?.created_at).calendar().toString(),
      out_for_delivery_date: moment(data?.out_for_delivery_date).calendar().toString(),
      picked_up_date: moment(data?.picked_up_date).calendar().toString(),
      return_approval_date: moment(data?.return_approval_date).calendar().toString(),
      return_delivery_promise_date: moment(data?.return_delivery_promise_date).calendar().toString(),
      return_requested_date: moment(data?.return_requested_date).calendar().toString(),
      updated_at: moment(data?.updated_at).calendar().toString(),

    })
    
  }

  const backButton = () => {
    history.push(`/return-orders`);
  }

  useEffect(() => {
    getOrder()
  }, [])

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between">
        <button onClick={backButton} className="btn-lg btn-primary text-light px-5 fs-4">back</button>
        <h1><span className="text-dark">odrer Id : </span><span className="text-primary">{returnOrder?.order_id}</span></h1>
      </div>
      <div className="py-5">
        {
          returnOrder && Object.keys(returnOrder).map((property: any) => (
            <div className="d-flex my-3">
              <div style={{ width: '300px' }} className="bg-primary py-2 text-light rounded-start fs-5">{property}</div>
              <div className="bg-light flex-grow-1 text-start px-5 py-2 rounded-end fs-5 text-dark">{returnOrder[property]}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ManageReturnOrder

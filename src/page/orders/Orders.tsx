import React, { useEffect } from 'react'
import { useState } from 'react'
import { ApiGet } from '../../helper/api/ApiData'
import WithData from './WithData'
import WithoutData from './WithoutData'

const Orders = () => {

  const [orderData, setOrderData] = useState<any>();

  const getOrders = async () => {
    const res: any = await ApiGet('order/get-order')    
    setOrderData(res.data);
  }

  useEffect(() => {
    getOrders();
  }, [])

  useEffect(() => {
    console.log("orderData", orderData);
    
  }, [orderData])

  return <div className="orders">
    <div className="first">
      <div className="welcome">
        <h1>Welcome,<br></br>Seller</h1>
      </div>
      {
        orderData
          ?
          <div className="btn-upload">
            <button>Upload sheet</button>
          </div>
          :
          <></>
      }
      <div className="btn-manage">
        <button>Manage Returns</button>
      </div>
    </div>
    {orderData?.length ? <WithData orderData={orderData} /> : <WithoutData setOrderData={setOrderData} />}
  </div>
}

export default Orders

import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { useState } from 'react'
import { ApiGet } from '../../helper/api/ApiData'
import WithData from './WithData'
import WithoutData from './WithoutData'
import { Button } from 'react-bootstrap';
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

  const history = useHistory();
  const handleRoute = () =>{ 
    history.push("/orders");
  }
  return <div className="orders">
    <div className="first">
      <div className="welcome">
        <h1>Welcome,<br></br>Seller</h1>
      </div>
      {
        orderData
          ?
          // <div className="btn-upload">
          //   <button>Upload sheet</button>
          // </div>
          <div>
            <Button variant="info" onClick={handleRoute}>Upload Sheet</Button>
            {/* <Link to="/signup" className="btn btn-primary">Sign up</Link> */}
          </div>
          :
          <></>
      }
      <div>
      <Button variant="info">Manage Orders</Button>
      </div>
    </div>
    {orderData?.length ? <WithData orderData={orderData} /> : <WithoutData setOrderData={setOrderData} />}
  </div>
}

export default Orders

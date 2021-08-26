import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { useState } from 'react'
import { ApiGet, ApiPost } from '../../helper/api/ApiData'
import WithData from './WithData'
import WithoutData from './WithoutData'
import { Button } from 'react-bootstrap';
const Orders = () => {

  // variables and states
  const [orderData, setOrderData] = useState<any>();
  const [file, setFile] = useState<File>();
  const history = useHistory();

  // helper functions
  const getOrders = async () => {
    const res: any = await ApiGet('order/get-order')
    setOrderData(res.data);
  }

  const importSheet = async () => {

    const formdata = new FormData()

    if (file) {
      formdata.append('file', file);
    }

    await ApiPost('order/import-order', formdata);
    const res: any = await ApiGet('order/get-order')
    console.log("datadata", res.data);

    setOrderData(res.data);
  }

  // useEffects
  useEffect(() => {
    getOrders();
  }, [])

  useEffect(() => {
    if (file) {
      importSheet();
    }
  }, [file])

  useEffect(() => {
    console.log("orderData", orderData);

  }, [orderData])

  return <div className="orders">
    <div className="first">
      <div className="welcome">
        <h1>Welcome,<br></br>Seller</h1>
      </div>
      {
        orderData?.length
          ?
          <>
            <label>
              <div className="btn-upload">
                <div className="btn" >Upload New Sheet</div>
              </div>
              <input className="hide" type="file" onChange={(e: any) => setFile(e.target.files[0])}></input>
            </label>
          </>
          : ""
      }
      <div className="btn-manage">
        <div className="btn" >Manage Orders</div>
      </div>
    </div>
    {orderData?.length ? <WithData orderData={orderData} /> : <WithoutData setFile={setFile} />}
  </div>
}

export default Orders

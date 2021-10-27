import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { useState } from 'react'
import { ApiGet, ApiPost } from '../../helper/api/ApiData'
import WithData from './WithData'
import WithoutData from './WithoutData'
import { Button } from 'react-bootstrap';
import { RootStateOrAny, useSelector } from 'react-redux';
const Orders = () => {

  // variables and states
  const [orderData, setOrderData] = useState<any>();
  const [file, setFile] = useState<File>();
  const { userData } = useSelector((state: RootStateOrAny) => state.userData);
  const [isThereData, setIsThereData] = useState(false);
  const [totalSize, setTotalSize] = useState(20);
  const [filteredData, setFilteredData] = useState<any>({
    startDate: "",
    endDate: "",
    orderId: "",
    status: "Ready to dispatch"
  });
  const history = useHistory();

  // helper functions


  const getOrders = async (perPage: number = 10, pageNumber: number = 1) => {
    const res: any = await ApiGet(`order/filtered-orders?start_date=${filteredData.startDate}&end_date=${filteredData.endDate}&order_id=${filteredData.orderId}&status=${filteredData.status}&per_page=${perPage}&page_number=${pageNumber}`)
    setOrderData(res?.data?.order.map((x: any, index: number) => {
      return {
        ...x,
        no: ((pageNumber - 1) * perPage) + index + 1
      }
    }));
    setTotalSize(res?.data?.count);
  }

  const checkEmpty = async () => {
    const res: any = await ApiGet('order/check-empty');
    setIsThereData(res.data);
    res.data && getOrders();
  }

  const importSheet = async () => {
    const formdata = new FormData()
    if (file) {
      formdata.append('file', file);
    }
    await ApiPost('order/import-order', formdata);
    checkEmpty();
  }

  const redirectToReturn = () => {
    history.push('/return-orders')
  }

  // useEffects
  useEffect(() => {
    checkEmpty();
  }, [])

  useEffect(() => {
    if (file) {
      importSheet();
    }
  }, [file])

  return <div className="orders">
    <div className="first">
      <div className="welcome">
        <h1>Welcome,<br></br>{userData?.first_name} {userData?.last_name}</h1>
      </div>
      {
        orderData?.length
          ?
          <>
            <label>
              <button className="btn-lg btn-primary text-light" >Upload New Sheet</button>
              <input className="hide" type="file" onChange={(e: any) => setFile(e.target.files[0])}></input>
            </label>
          </>
          : ""
      }
      <button onClick={redirectToReturn} className="btn-lg btn-primary text-light" >Return Orders Orders</button>
    </div>
    {isThereData
      ?
      <WithData
        orderData={orderData}
        totalSize={totalSize}
        getOrders={getOrders}
        setFilteredData={setFilteredData}
      />
      :
      <WithoutData
        setFile={setFile}
      />}
  </div>
}

export default Orders

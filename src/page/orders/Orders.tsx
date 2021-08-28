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

  // helper functions
  const getOrders = async (sizePerPage: number = 5, page: number = 1) => {
    const res: any = await ApiGet(`order/filtered-orders?start_date=${filteredData.startDate}&end_date=${filteredData.endDate}&order_id=${filteredData.orderId}&status=${filteredData.status}&per_page=${sizePerPage}&page_number=${page}`)
    setOrderData(res?.data?.order);
    setTotalSize(res?.data?.count);
  }

  const checkEmpty = async () => {
    const res: any = await ApiGet('order/get-order');
    setIsThereData(res.data)
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
    checkEmpty();
  }, [])

  useEffect(() => {
    if (file) {
      importSheet();
    }
  }, [file])

  useEffect(() => {
    console.log("filteredData", filteredData);
  }, [filteredData])

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

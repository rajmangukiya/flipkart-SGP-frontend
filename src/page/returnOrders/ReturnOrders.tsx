import React, { useEffect, useState } from 'react'
import { ApiGet, ApiPost } from '../../helper/api/ApiData';
import WithoutReturnData from './WithoutReturnData';
import WithReturnData from './WithReturnData';

const ReturnOrders = () => {

  const [file, setFile] = useState<File>();
  const [returnOrders, setReturnOrders] = useState<Array<any>>([])
  const [totalSize, setTotalSize] = useState(0)

  const getReturnData = async () => {
    try {
      const res: any = await ApiGet('return-order/filtered-return-orders?per_page=20&page_number=1')
      setReturnOrders(res?.data?.order);
      setTotalSize(res?.data?.count);
    } catch (error) {
      console.log(error);
    }
  }

  const importSheet = async () => {
    const formdata = new FormData()
    if (file) {
      formdata.append('file', file);
    }
    await ApiPost('return-order/import-return-order', formdata);
    getReturnData();
  }

  useEffect(() => {
    getReturnData();
  }, [])

  useEffect(() => {
    file && importSheet();
  }, [file])

  return (
    <div className="w-100">
      <div className="container d-flex justify-content-between align-items-center mt-4">
        <h1 className="text-primary">Welcome, <br />Seller</h1>
        <label>
          <div className="btn-upload">
            <div className="btn" >Upload New Sheet</div>
          </div>
          <input className="hide" type="file" onChange={(e: any) => setFile(e.target.files[0])}></input>
        </label>
      </div>
      {
        returnOrders?.length ? <WithReturnData returnOrders={returnOrders} totalSize={totalSize} getReturnData={getReturnData} /> : <WithoutReturnData setFile={setFile} />
      }
    </div>
  )
}

export default ReturnOrders

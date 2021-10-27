import React, { useEffect, useState } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { ApiGet, ApiPost } from '../../helper/api/ApiData';
import WithoutReturnData from './WithoutReturnData';
import WithReturnData from './WithReturnData';

const ReturnOrders = () => {

  const [file, setFile] = useState<File>();
  const [returnOrders, setReturnOrders] = useState<Array<any>>([])
  const { userData } = useSelector((state: RootStateOrAny) => state.userData);
  const [totalSize, setTotalSize] = useState(0)
  const history = useHistory()
  const [totalPrice, setTotalPrice] = useState(0)
  const [isThereData, setIsThereData] = useState(false);
  const [filterData, setFilterData] = useState<any>({
    startDate: "",
    endDate: "",
    status: "all"
  })

  const checkEmpty = async () => {
    const res: any = await ApiGet('return-order/check-return-order');
    setIsThereData(res.data);    
    res.data && getReturnData();
  }

  const getReturnData = async (perPage: number = 10, pageNumber: number = 1) => {
    try {
      const res: any = await ApiGet(`return-order/filtered-return-orders?start_date=${filterData.startDate}&end_date=${filterData.endDate}&status=${filterData.status}&per_page=${perPage}&page_number=${pageNumber}`)
      setReturnOrders(res?.data?.order.map((x: any, index: number) => {
        return {
          ...x,
          no: ((pageNumber - 1) * perPage) + index + 1
        }
      }));
      setTotalSize(res?.data?.count)
      setTotalPrice(res?.data?.total)
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

  const back = () => {
    history.push('/orders')
  }

  useEffect(() => {
    checkEmpty();
  }, [])

  useEffect(() => {
    file && importSheet();
  }, [file])


  return (
    <div className="w-100">
      <div className="container d-flex justify-content-between align-items-center mt-4">
        <div className="d-flex align-items-start">
          <button className="btn-lg btn-primary text-white me-5" onClick={back}>back</button>
          <h1 className="text-primary">Welcome, <br />{userData?.first_name} {userData?.last_name}</h1>
        </div>
        <label>
          <div className="btn-upload">
            <div className="btn" >Upload New Sheet</div>
          </div>
          <input className="hide" type="file" onChange={(e: any) => setFile(e.target.files[0])}></input>
        </label>
      </div>
      {
        isThereData
          ?
          <WithReturnData
            returnOrders={returnOrders}
            totalSize={totalSize}
            getReturnData={getReturnData} 
            setFilterData={setFilterData}
            totalPrice={totalPrice}
          />
          :
          <WithoutReturnData
            setFile={setFile}
          />
      }
    </div>
  )
}

export default ReturnOrders

import moment from 'moment';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import Pagination from '../../component/Pagination'
import { ApiPost } from '../../helper/api/ApiData';

const WithReturnData: React.FC<any> = ({ returnOrders, totalSize, getReturnData, setFilterData, totalPrice }) => {

  const history = useHistory();

  const redirectToOrder = (row: any) => {
    console.log(row);
    history.push(`/return-orders/${row.order_id}`);
  }

  const btnFormatter = (cell: any, row: any, rowIndex: any, formatExtraData: any) => {
    return (
      <button onClick={() => redirectToOrder(row)} className="btn btn-primary text-white px-3 py-1 rounded-2">
        manage
      </button>
    );
  }

  const cmpltBtnFormatter = (cell: any, row: any, rowIndex: any, formatExtraData: any) => {
    return (
      <button className="btn btn-primary text-white px-3 py-1 rounded-2" onClick={async () => {
        await ApiPost(`return-order/change-status/${row.id}`, {})
        getReturnData()
      }}>
        {row.status}
      </button>
    );
  }

  const columns = [
    {
      dataField: 'no',
      text: 'no',headerStyle: {
        width: '5%',
      },
    },
    {
      dataField: 'order_id',
      text: 'Order Id',
      headerStyle: {
        // width: '14%',
        style: { backgroudColor: 'green' }
      },
    },
    {
      dataField: 'total_price',
      text: `price (${totalPrice})`,
      sort: true,
      headerStyle: {
        width: '15%',
      },
    },
    {
      dataField: 'status',
      text: 'complete',
      headerStyle: {
        width: '15%',
      },
      formatter: cmpltBtnFormatter
    },
    {
      dataField: 'manage',
      text: 'manage',
      headerStyle: {
        width: '15%',
      },
      formatter: btnFormatter
    },
  ];

  return (
    <div className="w-100 p-5 d-flex">
      <div className="w-100 p-4">
        <h3 className="text-primary pb-4">Return Orders</h3>
        <div className="w-100 bg-light-blue p-3 mb-4 rounded-3">
          <div className="w-100 d-flex justify-content-between">
            <div className="d-flex">
              <div className="bg-primary d-flex px-5 align-items-center justify-content-center text-light rounded-start">to</div>
              <input className="p-2 rounded-end me-3" type="date" onChange={(e: any) =>
                setFilterData((prev: any) => {
                  return {
                    ...prev,
                    startDate: moment(e.target.value).format('yyyy-MM-DD')
                  }
                })
              } />
            </div>
            <div className="d-flex">
              <div className="bg-primary d-flex align-items-center justify-content-center text-light px-5 rounded-start">from</div>
              <input className="p-2 rounded-1 rounded-end" type="date" onChange={(e: any) =>
                setFilterData((prev: any) => {
                  return {
                    ...prev,
                    endDate: moment(e.target.value).format('yyyy-MM-DD')
                  }
                })
              } />
            </div>
            <select className="custom-select px-5 me-3 rounded-3 px-2" onChange={(e: any) =>
              setFilterData((prev: any) => {
                return {
                  ...prev,
                  status: e.target.value
                }
              })
            }>
              <option value="Packing in progress">Packing in progress</option>
              <option value="Form failed">Form failed</option>
              <option value="Packed">Packed</option>
              <option value="Ready to dispatch">Ready to dispatch</option>
              <option value="Pickup complete">Pickup complete</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Rerurn requested">Rerurn requested</option>
              <option value="Returned">Returned</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Completed">Completed</option>
            </select>
            <button className="bg-primary text-light py-2 px-5 rounded-2" onClick={() => getReturnData()}>Go</button>
            <button className="bg-primary text-light py-2 px-5 rounded-2">Download</button>
          </div>
          <div className="w-100 d-flex justify-content-between">
          </div>
        </div>
        <Pagination
          orderData={returnOrders}
          columns={columns}
          totalSize={totalSize}
          getOrders={getReturnData}
        />
      </div>
      {/* <div className="w-50 p-4">
        <h3 className="text-primary pb-4">Missing Orders</h3>
        <Pagination
          orderData={returnOrders}
          columns={columns}
          totalSize={totalSize}
          getOrders={getReturnData}
        />
      </div> */}
    </div>
  )
}

export default WithReturnData

import React from 'react'
import { useHistory } from 'react-router';
import Pagination from '../../component/Pagination'

const WithReturnData: React.FC<any> = ({ returnOrders, totalSize, getReturnData }) => {

  const history = useHistory();

  const redirectToOrder = (row: any) => {
    console.log(row);
    history.push(`/return-orders/${row.order_id}`);
  }

  const btnFormatter = (cell: any, row: any, rowIndex: any, formatExtraData: any) => {
    return (
      <button onClick={() => redirectToOrder(row)} className="table-manage-btn">
        manage
      </button>
    );
  }

  const cmpltBtnFormatter = (cell: any, row: any, rowIndex: any, formatExtraData: any) => {
    return (
      <button onClick={() => redirectToOrder(row)} className="table-manage-btn">
        complete
      </button>
    );
  }

  const columns = [
    {
      dataField: 'order_id',
      text: 'Order Id',
      headerStyle: {
        width: '14%',
        style: { backgroudColor: 'green' }
      },
    },
    {
      dataField: 'invoice_amount',
      text: 'Invoice Amount',
      sort: true,
      headerStyle: {
        width: '5%',
      },
    },
    {
      dataField: 'complete',
      text: 'complete',
      headerStyle: {
        width: '5%',
      },
      formatter: cmpltBtnFormatter
    },
    {
      dataField: 'manage',
      text: 'manage',
      headerStyle: {
        width: '5%',
      },
      formatter: btnFormatter
    },
  ];

  return (
    <div className="w-100 p-5 d-flex">
      <div className="w-50 p-4">
        <h3 className="text-primary pb-4">Return Orders</h3>
        <Pagination
          orderData={returnOrders}
          columns={columns}
          totalSize={totalSize}
          getOrders={getReturnData}
        />
      </div>
      <div className="w-50 p-4">
        <h3 className="text-primary pb-4">Missing Orders</h3>
        <Pagination
          orderData={returnOrders}
          columns={columns}
          totalSize={totalSize}
          getOrders={getReturnData}
        />
      </div>
    </div>
  )
}

export default WithReturnData

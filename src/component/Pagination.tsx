import React from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';

const Pagination = () => {

  const data = [
    {
      no: 1,
      order_id: 'first product',
      order_on: 100,
      status: 'done',
      amount: 200,
      tracking_id: 1
    },
    {
      no: 2,
      order_id: 'first product',
      order_on: 100,
      status: 'done',
      amount: 200,
      tracking_id: 1
    },
    {
      no: 3,
      order_id: 'first product',
      order_on: 100,
      status: 'done',
      amount: 200,
      tracking_id: 1
    },
  ]

  const columns = [
    {
      dataField: 'no',
      text: 'No'
    }, {
      dataField: 'order_id',
      text: 'Order Id'
    }, {
      dataField: 'order_on',
      text: 'Order On'
    }, {
      dataField: 'status',
      text: 'Status'
    }, {
      dataField: 'amount',
      text: 'Amount'
    }, {
      dataField: 'tracking_id',
      text: 'Tracking Id'
    }, {
      dataField: 'manage',
      text: 'Manage'
    }
  ];

  return (
    <div>
      <div>
        <BootstrapTable
          remote
          keyField="id"
          data={data}
          columns={columns}
        />
      </div>
    </div>
  )
}

export default Pagination

import React, {useEffect, useState} from 'react'
import axios from 'axios'
import * as ReactBootStrap from 'react-bootstrap' 
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import Moment from 'moment'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Hidden } from '@material-ui/core';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

interface Props {
  orderData: Array<any>;
}

const Pagination: React.FC<Props> = ({orderData}) => {
  // console.log(Moment(orderData[0].invoice_date).format('DD-MM-YYYY'));
  const onTableChange  = (page: number, sizePerPage: number) => {

  }

  const onPageChange  = (e: any) => {

  }

  const onSizePerPageChange = (e: any) => {

  }

  const page = 1;
  const sizePerPage = 2;
  const totalSize = 3;
  const pagesizedropdownflag = true;

  // const data = [
  //   {
  //     no: 1,
  //     order_id: 'first product',
  //     order_on: 100,
  //     status: 'done',
  //     amount: 200,
  //     tracking_id: 1
  //   },
  //   {
  //     no: 2,
  //     order_id: 'first product',
  //     order_on: 100,
  //     status: 'done',
  //     amount: 200,
  //     tracking_id: 1
  //   },
  //   {
  //     no: 3,
  //     order_id: 'first product',
  //     order_on: 100,
  //     status: 'done',
  //     amount: 200,
  //     tracking_id: 1
  //   },
  // ]

  const columns = [
    {
      dataField: 'order_id',
      text: 'Order Id'
    }, {
      dataField: 'shipment_id',
      text: 'Shipment Id'
    }, {
      dataField: 'order_on',
      text: 'Order On'
    }, {
      dataField: 'hsn_code',
      text: 'HSN CODE'
    }, {
      dataField: 'order_state',
      text: 'Order State'
    }, {
      dataField: 'product',
      text: 'Product'
    }, {
      dataField: 'invoice_no',
      text: 'Invoice No.'
    }, {
      dataField: 'invoice_date',
      text: 'Invoice Date',
      title: true, // get higher priority
    }, 
    {
      dataField: 'invoice_amount',
      text: 'Invoice Amount',
      sort: true,
    }, {
      dataField: 'selling_price',
      text: 'Selling Price',
      sort: true,
    }, {
      dataField: 'shipping_charge',
      text: 'Shipping Charge',
      sort: true,
    }, {
      dataField: 'tracking_id',
      text: 'Tracking Id'
    },
  ];

  return (
    <div className="App">
      <BootstrapTable
        keyField="order_id"
        data = {orderData}
        columns = {columns}
        pagination = {paginationFactory({sizePerPage : 5, paginationSize : 3})}
        // filter={ filterFactory()}
      />
    </div>

    
    
    // <div>
    //   <PaginationProvider
    //     pagination={
    //       paginationFactory({
    //         custom: true,
    //         // firstPageText:<img src="./img/firstarrow.svg"/>,
    //         // lastPageText:<img src="./img/lastarrow.svg"/>,
    //         // prePageText: <img src="./img/nextarrow.svg"/>,
    //         // nextPageText: <img src="./img/prevarrow.svg"/>,
            
    //         page,
    //         sizePerPage,
    //         totalSize,
    //         sizePerPageList: [{
    //           text: '1개', value: 1
    //         }, {
    //           text: '2개', value: 2
    //         }, {
    //           text: '5개', value: 5
    //         }, {
    //           text: '10개', value: 10
    //         }
    //       ],
    //         alwaysShowAllBtns: true,
    //       })
    //     }
    //   >
    //     {
    //       ({
    //         paginationProps,
    //         paginationTableProps
    //       }) => (
    //         <div>
    //           {/*
    //           ------------
    //           <BootstrapTable
    //             {...paginationTableProps}
    //             remote
    //             keyField="id"
    //             data={orderData}
    //             columns={columns}
    //             onTableChange={() => onTableChange(page, sizePerPage)}
    //           /> ------------
    //           */}
    //           {/* <div className="paginationcustom">
    //             <PaginationListStandalone
    //               {...paginationProps}
    //               onPageChange={(p) => onPageChange(p)}
    //             />
    //             {totalSize > 0 && pagesizedropdownflag &&
    //               <SizePerPageDropdownStandalone
    //                 {...paginationProps}
    //                 onSizePerPageChange={(e) => onSizePerPageChange(e)}
    //               />
    //             }

    //           </div> */}
    //         </div>
    //       )
    //     }
    //   </PaginationProvider>
    // </div>
//    <div>
//      <ReactBootStrap.Table bordered hover >
//   <thead>
//     <tr>
//       <th>Order Id</th>
//       <th>Shipment ID</th>
//       <th>Ordered On</th>
//       <th>HSN CODE</th>
//       <th>Product</th>
//       <th>Invoice No.</th>
//       <th>Invoice Date</th>
//       <th>Invoice Amount</th>
//       <th>Selling Price</th>
//       <th>Shipping Charge</th>
//       <th>Tracking ID</th>
//     </tr>
//   </thead>
//   <tbody>
//     {
//       orderData && orderData.map((order) => (
//         <tr key={order.id}>
//           <td>{order.order_id}</td>
//           <td>{order.shipment_id}</td>
//           <td>{Moment(order.order_on).format('DD-MM-YYYY')}</td>
//           <td>{order.hsn_code}</td>
//           <td>{order.product}</td>
//           <td>{order.invoice_no}</td>
//           <td>{order.invoice_amount}</td>
//           {/* <td>{order.invoice_date}</td> */}
//           <td>{Moment(order.invoice_date).format('DD-MM-YYYY')}</td>
//           <td>{order.selling_price}</td>
//           <td>{order.shipping_charge}</td>
//           <td>{order.tracking_id}</td>
//         </tr>
//       ))
//     }
//   </tbody>
// </ReactBootStrap.Table>
//    </div>
  )
}

export default Pagination

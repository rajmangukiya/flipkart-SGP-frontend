import React, { useState, useEffect } from 'react'
import Pagination from '../../component/Pagination'
import moment from 'moment';
import { useHistory } from 'react-router';

interface Props {
  orderData: Array<any>;
  totalSize: number;
  getOrders: any;
  setFilteredData: any;
}

const WithData: React.FC<Props> = (props) => {

  // variables and states
  const { orderData, totalSize, getOrders, setFilteredData } = props;
  const history = useHistory();

  // helper functions

  const redirectToOrder = (row: any) => {
    console.log(row);
    history.push(`/orders/${row.order_id}`);
  }

  const btnFormatter = (cell: any, row: any, rowIndex: any, formatExtraData: any) => {
    return (
      <button onClick={() => redirectToOrder(row)} className="table-manage-btn">
        manage
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
    }, {
      dataField: 'shipment_id',
      text: 'Shipment Id',
      headerStyle: {
        width: '8%',
      },
    }, {
      dataField: 'order_on',
      text: 'Order On',
      sort: true,
      formatter: (cell: any) => {
        return moment(cell)
          .format("DD-MM-YYYY")
      },
      headerStyle: {
        width: '7%',
      },
    }, {
      dataField: 'hsn_code',
      text: 'HSN CODE',
      headerStyle: {
        width: '6%',
      },
    }, {
      dataField: 'order_state',
      text: 'Order State',
      headerStyle: {
        width: '5%',
      },
      // filter: multiSelectFilter({
      //   options: selectOptions,
      //   // className: 'test-classname',
      //   withoutEmptyOption: false,
      //   // defaultValue: [],
      //   // comparator: Comparator.LIKE, // default is Comparator.EQ
      //   // style: { backgroundColor: 'pink' },
      //   // getFilter: (filter) => { // qualityFilter was assigned once the component has been mounted.
      //   //   qua = filter;
      //   // },
      // }) 
      // editCellStyle : (row: any) => {
      //   // if (cell === 'Ready to dispatch') {
      //     return {
      //       // style : {
      //         color : '#FD0303',
      //         textSize : '10%',
      //       // }
      //     };
      //   // }
      style: (row: any, rowIndex: any) => {
        if (row === "Ready to dispatch") {
          return { backgroundColor: '#1FAA59' }
        }
        if (row === "abc") {
          return { backgroundColor: '#E8BD0D' }
        }
        return { backgroundColor: '#ffffff' }
      }
    }, {
      dataField: 'product',
      text: 'Product',
      headerStyle: {
        width: '8%',
      },
    }, {
      dataField: 'invoice_no',
      text: 'Invoice No.',
      headerStyle: {
        width: '10%',
      },
    }, {
      dataField: 'invoice_date',
      sort: true,
      text: 'Invoice Date',
      formatter: (cell: any) => {
        return moment(cell)
          // .local()
          .format("DD-MM-YYYY")
      },
      headerStyle: {
        width: '6%',
      },
    },
    {
      dataField: 'invoice_amount',
      text: 'Invoice Amount',
      sort: true,
      headerStyle: {
        width: '5%',
      },
    }, {
      dataField: 'selling_price',
      text: 'Selling Price',
      sort: true,
      headerStyle: {
        width: '4%',
      },
    }, {
      dataField: 'shipping_charge',
      text: 'Shipping Charge',
      sort: true,
      headerStyle: {
        width: '5%',
      },
    }, {
      dataField: 'tracking_id',
      text: 'Tracking Id',
      headerStyle: {
        width: '9%',
      },
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


  // effects


  return (
    <>
      <div className="second">
        <div className="first-row">
          <div className="input-container">
            <div className="filter-label">Order From</div>
            <input className="filter-input" type="date" onChange={(e: any) => setFilteredData((prev: any) => {
              return {
                ...prev,
                startDate: moment(e.target.value).format('yyyy-MM-DD')
              }
            })} />
          </div>
          <div className="input-container">
            <div className="filter-label">to</div>
            <input className="filter-input" type="date" onChange={(e: any) => setFilteredData((prev: any) => {
              return {
                ...prev,
                endDate: moment(e.target.value).format('yyyy-MM-DD')
              }
            })} />
          </div>
          <div className="input-container">
            <div className="filter-label">Order Id</div>
            <input className="filter-input" type="text" onChange={(e: any) => setFilteredData((prev: any) => {
              return {
                ...prev,
                orderId: e.target.value
              }
            })} />
          </div>
        </div>
        <div className="second-row">
          <div className="input-container">
            <div className="filter-label">Status</div>
            {/* <input className="filter-input" type="text" placeholder="select status"/> */}
            <select name="status" id="order_status" className="filter-input" placeholder="select status" onChange={(e: any) => setFilteredData((prev: any) => {
              return {
                ...prev,
                status: e.target.value
              }
            })}>
              <option value="Ready to dispatch">Ready to dispatch</option>
              <option value="Saab">Saab</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Audi">Audi</option>
            </select>
          </div>
          <div></div>
          <button style={{ marginLeft: 'auto', marginRight: '3.25%' }} className="btn-filter" onClick={() => {
            getOrders();
          }}>Filter</button>
        </div>
      </div>
      <div className="third">
        {orderData ? <Pagination
          orderData={orderData}
          columns={columns}
          totalSize={totalSize}
          getOrders={getOrders}
        /> : ""}
      </div>
    </>
  )
}

export default WithData

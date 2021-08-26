import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as ReactBootStrap from 'react-bootstrap'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import Moment from 'moment'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { colors, Hidden } from '@material-ui/core';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import filterFactory, { textFilter, dateFilter, multiSelectFilter } from 'react-bootstrap-table2-filter';
import { HowToVoteRounded, RowingSharp } from '@material-ui/icons';
import { blueGrey } from '@material-ui/core/colors';
interface Props {
  orderData: Array<any>;
}

const Pagination: React.FC<Props> = ({ orderData }) => {
  // console.log(Moment(orderData[0].invoice_date).format('DD-MM-YYYY'));

  const [filteredData, setFilteredData] = useState(orderData);
  const [status, setStatus] = useState("Ready to dispatch");
  const [fromDate, setFromDate] = useState(new Date());


  const handleSearch = () => {
    // let value = event.target.value.toLowerCase();
    // let result = [];
    // console.log(value);
    // result = orderData.filter((data) => {
    // return data.title.search(value) != -1;
    // });
    // setFilteredData(result);
  }

  useEffect(() => {
    // fetch(orderData)
    console.log('effect : ', filteredData);
    // setData([orderData]);
  }, []);
  const onTableChange = (page: number, sizePerPage: number) => {

  }

  const onPageChange = (e: any) => {

  }

  const onSizePerPageChange = (e: any) => {

  }
  
  const btnFormatter = (cell: any, row: any, rowIndex: any, formatExtraData: any) => {
    return (
        <button className="table-manage-btn">
          manage
        </button>
    );
}

const selectOptions = {
  0: 'good',
  1: 'Bad',
  2: 'unknown'
};

  const page = 1;
  const sizePerPage = 2;
  const totalSize = 3;
  const pagesizedropdownflag = true;

  const columns = [
    {
      // filter: textFilter({
      //   // placeholder: 'order id',
      //   // caseSensitive: false,
      //   style: { backgroundColor: 'green' }
      // }),
      dataField: 'order_id',
      text: 'Order Id',
      headerStyle: {
        width: '14%',
        style: { backgroudColor: 'green' }
      },
      // style: { backgroundColor: 'green' }

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
        return Moment(cell)
          // .local()
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
      style: (row : any, rowIndex : any) => { 
        if (row === "Ready to dispatch") {
        return {backgroundColor : '#1FAA59'} 
        } 
        if (row === "abc") {
          return {backgroundColor : '#E8BD0D'} 
        }
        return {backgroundColor : '#ffffff'}   
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
        return Moment(cell)
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
  
 

  const filterColumns = [
    {
      dataField: 'order_id',
      text: 'Order Id',
      filter: textFilter({

      })
    }];

  function  search(rows : any) {
    // row = 'ready';
    console.log('status', status, fromDate);
    // console.log((Object.values(rows).filter((user : any) => user.order_id === status)));
    return Object.values(rows).filter((row : any) => ((row.order_state === status)) );
  }

  function  dateSearch(rows : any) {
    // row = 'ready';
    console.log('date: ',rows);
    // console.log((Object.values(rows).filter((user : any) => user.order_id === q)));
    return Object.values(rows).filter((row : any) => row.order_on === fromDate);
  }

  const rowStyle = (cell : any, rowIndex : any) => {
    if (cell.order_state === 'Ready to dispatch') {
      return {backgroundColor : '#38CC77'}
    }
    return {backgroundColor : 'red'}
  };
  return (
    <>
     <div className="second">
        <div className="first-row">
          <div className="input-container">
            <div className="filter-label">Order From</div>
            <input className="filter-input" type="date" onChange={(e : any) => setFromDate(e.target.value)}/>
          </div>
          <div className="input-container">
            <div className="filter-label">to</div>
            <input className="filter-input" type="date" />
          </div>
          <div className="input-container">
            <div className="filter-label">Order Id</div>
            <input className="filter-input" type="text" />
          </div>
        </div>
        <div className="second-row">
          <div className="input-container">
            <div className="filter-label">Status</div>
            {/* <input className="filter-input" type="text" placeholder="select status"/> */}
            <select name="status" id="order_state" className="filter-input" placeholder="select status" value={status} onChange={(e : any) => setStatus(e.target.value)}>
              <option value="Ready to dispatch"></option>
              <option value="Ready to dispatch">Ready to dispatch</option>
              <option value="abc">Saab</option>
              <option value="OD122371832770579000">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          {/* <div className="input-container">
            <div className="filter-label">Sort</div>
            <input className="filter-input" type="text" />
          </div> */}
          <div></div>
          <button style={{marginLeft : 'auto', marginRight : '3.25%'}} className="btn-filter">Filter</button>
        </div>
      </div>
      
      <BootstrapTable
        keyField="order_id"
        data = {search(filteredData)}
        columns = {columns}
        // columns = {filterColumns}
        pagination = {paginationFactory({sizePerPage : 5, paginationSize : 3})}
        filter={ filterFactory() }
        hover
        bordered
        rowStyle={rowStyle} 
      />
    </>


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

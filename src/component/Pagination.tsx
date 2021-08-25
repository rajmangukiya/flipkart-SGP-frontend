import React from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';

interface Props {
  orderData: Array<any>;
}

const Pagination: React.FC<Props> = ({orderData}) => {

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
      text: 'Invoice Date.'
    }, {
      dataField: 'invoice_amount',
      text: 'Invoice Amount.'
    }, {
      dataField: 'selling_price',
      text: 'Sekking Price'
    }, {
      dataField: 'shipping_charge',
      text: 'Shipping Charge'
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
      <PaginationProvider
        pagination={
          paginationFactory({
            custom: true,
            // firstPageText:<img src="./img/firstarrow.svg"/>,
            // lastPageText:<img src="./img/lastarrow.svg"/>,
            // prePageText: <img src="./img/nextarrow.svg"/>,
            // nextPageText: <img src="./img/prevarrow.svg"/>,
            
            page,
            sizePerPage,
            totalSize,
            sizePerPageList: [{
              text: '1개', value: 1
            }, {
              text: '2개', value: 2
            }, {
              text: '5개', value: 5
            }, {
              text: '10개', value: 10
            }
          ],
            alwaysShowAllBtns: true,
          })
        }
      >
        {
          ({
            paginationProps,
            paginationTableProps
          }) => (
            <div>
              <BootstrapTable
                {...paginationTableProps}
                remote
                keyField="id"
                data={orderData}
                columns={columns}
                onTableChange={() => onTableChange(page, sizePerPage)}
              />
              {/* <div className="paginationcustom">
                <PaginationListStandalone
                  {...paginationProps}
                  onPageChange={(p) => onPageChange(p)}
                />
                {totalSize > 0 && pagesizedropdownflag &&
                  <SizePerPageDropdownStandalone
                    {...paginationProps}
                    onSizePerPageChange={(e) => onSizePerPageChange(e)}
                  />
                }

              </div> */}
            </div>
          )
        }
      </PaginationProvider>
    </div>
  )
}

export default Pagination

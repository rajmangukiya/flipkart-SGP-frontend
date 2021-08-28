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
  columns: Array<any>;
  totalSize: number;
  getOrders: any;
}

const Pagination: React.FC<Props> = ({
  orderData,
  columns,
  totalSize,
  getOrders
}) => {

  const [page, setPage] = useState(1);
  const [sizePerPage, setSizePerPage] = useState(5);
  const pagesizedropdownflag = true;

  const rowStyle = (cell: any, rowIndex: any) => {
    if (cell.order_state === 'Ready to dispatch') {
      return { backgroundColor: '#38CC77' }
    }
    return { backgroundColor: 'red' }
  };

  const onPageChange = (pageNumber: any) => {
    setPage(pageNumber);
    getOrders(sizePerPage, pageNumber);
  }

  const onSizePerPageChange = (sizeperpage: any) => {
    setSizePerPage(sizeperpage)
    setPage(1);
    getOrders(sizeperpage, 1);
  }

  return (
    <div>
      <PaginationProvider
        pagination={
          paginationFactory({
            custom: true,
            page,
            sizePerPage,
            totalSize,
            sizePerPageList: [{
              text: '5', value: 5
            }, {
              text: '10', value: 10
            }, {
              text: '50', value: 50
            }, {
              text: '100', value: 100
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
                keyField="order_id"
                data={orderData}
                columns={columns}
                filter={filterFactory()}
                hover
                bordered
                rowStyle={rowStyle}
                onTableChange={() => getOrders(page, sizePerPage)}
              />
              <div className="paginationcustom">
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

              </div>
            </div>
          )
        }
      </PaginationProvider>
    </div>
  )
}

export default Pagination

import React from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';

const Pagination = () => {

  const data = [
    {
      id: 1,
      name: 'first product',
      price: 100
    },
    {
      id: 1,
      name: 'first product',
      price: 100
    },
    {
      id: 1,
      name: 'first product',
      price: 100
    }
  ]

  const columns = [{
    dataField: 'id',
    text: 'Product ID'
  }, {
    dataField: 'name',
    text: 'Product Name'
  }, {
    dataField: 'price',
    text: 'Product Price'
  }];

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

import React from 'react'
import Pagination from '../../component/Pagination'

const WithData = () => {
  return (
    <>
      <div className="second">
        <div className="first-row">
          <div className="input-container">
            <div className="filter-label">Order From</div>
            <input className="filter-input" type="date" />
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
            <input className="filter-input" type="text" />
          </div>
          <div className="input-container">
            <div className="filter-label">Sort</div>
            <input className="filter-input" type="text" />
          </div>  
          <button className="btn-filter">Filter</button>
        </div>
      </div>
      <div className="third">
        <h1>Orders table</h1>
      </div>
      <Pagination />
    </>
  )
}

export default WithData

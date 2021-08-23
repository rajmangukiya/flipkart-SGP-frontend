import React from 'react'
import WithData from './WithData'
import WithoutData from './WithoutData'

const Orders = () => {

  const data = 1;

  return <div className="orders">
    <div className="first">
      <div className="welcome">
        <h1>Welcome,<br></br>Seller</h1>
      </div>
      {
        data
          ?
          <div className="btn-upload">
            <button>Upload sheet</button>
          </div>
          :
          <></>
      }
      <div className="btn-manage">
        <button>Manage Returns</button>
      </div>
    </div>
    {data ? <WithData /> : <WithoutData />}
  </div>
}

export default Orders

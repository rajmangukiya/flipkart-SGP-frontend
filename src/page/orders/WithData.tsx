import React, {useState, useEffect} from 'react'
import Pagination from '../../component/Pagination'
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  orderData: Array<any>;
}

const WithData: React.FC<Props> = (props) => {

  const { orderData } = props;
  // const [filteredData, setFilteredData] = useState(orderData);

  return (
    <>
      {/* <div className="second">
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
            <input className="filter-input" type="text" value={q} onChange={(e) => setQ(e.target.value)}/>
          </div>
          {/* <div className="input-container">
            <div className="filter-label">Sort</div>
            <input className="filter-input" type="text" />
          </div> */}
          {/* <div></div>
          <button style={{marginLeft : 'auto', marginRight : '3.25%'}} className="btn-filter">Filter</button>
        </div> */}
      {/* </div> */}
      <div className="third">
        <Pagination orderData={orderData} />
      </div>
    </>
  )
}

export default WithData

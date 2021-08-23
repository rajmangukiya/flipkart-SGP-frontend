import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';

const WithoutData = () => {
  return (
    <div className="add-icon-container">
      {
        <AddCircleIcon style={{
          color: 'rgb(0, 179, 255)',
          fontSize: 300
        }} />
      }
    </div>
  )
}

export default WithoutData

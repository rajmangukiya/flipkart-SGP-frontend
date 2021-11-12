import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';


const WithoutReturnData: React.FC<any> = ({setFile}) => {
  return (
      <div className="mx-5">
        <div className="bg-light-blue mt-3 rounded rounded-3 d-flex align-items-center justify-content-center">
          <label>
            {
              <AddCircleIcon style={{
                color: 'rgb(0, 179, 255)',
                fontSize: 300,
                cursor: "pointer",
                margin: '100px'
              }} />
            }
            <input type="file" className="hide" onChange={(e: any) => {
              if (!e.target.files || e.target.files.length === 0) {
                window.location.reload();
                return;
              }
              setFile(e.target.files[0])
            }
            } />
          </label>
        </div>
      {/* <div className="w-50 mx-5">
        <h4 className="text-primary my-4">Return orders</h4>
        <div className="w-100 h-100 bg-light py-5 rounded rounded-3 d-flex justify-content-center align-items-center">
          <h4 className="text-primary">Empty</h4>
        </div>
      </div> */}
    </div>
  )
}

export default WithoutReturnData

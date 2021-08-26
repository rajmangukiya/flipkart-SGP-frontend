import React, { useEffect, useState } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { ApiGet, ApiPost } from '../../helper/api/ApiData';
import { useHistory } from 'react-router';

interface Props {
  setFile: any;
}

const WithoutData: React.FC<Props> = (props) => {

  const { setFile } = props;

  const history = useHistory();

  return (
    <div className="add-icon-container">
      <label>
        {
          <AddCircleIcon style={{
            color: 'rgb(0, 179, 255)',
            fontSize: 300,
            cursor: "pointer"
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
  )
}

export default WithoutData

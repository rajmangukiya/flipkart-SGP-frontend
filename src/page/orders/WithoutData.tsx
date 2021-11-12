import React, { useEffect, useState } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { ApiGet, ApiPost } from '../../helper/api/ApiData';
import { useHistory } from 'react-router';

interface Props {
  setFile: any;
}

// all function about withoutdata
const WithoutData: React.FC<Props> = (props) => {

  const { setFile } = props;

  const history = useHistory();

  return (
    <div className="bg-light-blue mt-3 rounded-3">
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
  )
}

export default WithoutData

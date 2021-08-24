import React, { useEffect, useState } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { ApiGet, ApiPost } from '../../helper/api/ApiData';
import { useHistory } from 'react-router';

interface Props {
  setOrderData: any;
}

const WithoutData: React.FC<Props> = (props) => {

  const [file, setFile] = useState<File>();
  const history = useHistory();

  const importSheet = async () => {

    const formdata = new FormData()

    if (file) {
      formdata.append('file', file);
    }

    await ApiPost('order/import-order', formdata);
    const res: any = await ApiGet('order/get-order')
    console.log("datadata", res.data);
    
    props.setOrderData(res.data);
  }

  useEffect(() => {
    if (file) {
      importSheet();
    }
  }, [file])

  return (
    <div className="add-icon-container">
      {
        <AddCircleIcon style={{
          color: 'rgb(0, 179, 255)',
          fontSize: 300
        }} />
      }
      <input type="file" onChange={(e: any) => {
        if (!e.target.files || e.target.files.length === 0) {
          window.location.reload();
          return;
        }
        setFile(e.target.files[0])
      }
      } />
    </div>
  )
}

export default WithoutData

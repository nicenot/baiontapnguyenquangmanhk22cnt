import React, { useEffect, useState } from 'react';
import NqmListTableName from './nqm_components/NqmListTableName';
import axios from './nqm_apis/nqm-2210900039';
import NqmFormTableName from './nqm_components/NqmFormTableName';

export default function NqmApp() {
  // doc du lieu tu api
  const [nqmListTableName, setNqmListTableName] = useState([]);
  const nqmGetTableName = async () => {
    let nqmResp = await axios.get("nqmTableName");
    console.log("App list:",nqmResp.data);
    setNqmListTableName(nqmResp.data);
  };

  useEffect(() => {
    nqmGetTableName();
  }, []);


  // ham xoa 
  const nqmHandleDelete= async (nqmId)=>{
    let nqmRes = await axios.delete("nqmTableName/"+nqmId);
    nqmGetTableName();
  }
    const nqmObjTableName = {
      "nqmTbName": "Nguyễn Quang Mạnh",
      "nqmTbEmail": "Manhsm2004@gmail.com",
      "nqmTbPhone": "22109302",
      "nqmTbStatus": false,
      "nqmid": "2210900039"
    };
    const [nqmTableName,setNqmTableName] = useState();

    const NqmHandleEdit = ()=>{
      nqmGetTableName();
    }
    const nqmHandleEdit =(nqmObjEditTableName)=>{
      setNqmTableName(nqmObjTableName)
    }
  return (
    <div className='container border my'>
      <h1>bài đánh giá hết học phần - Nguyễn Quang Mạnh : 2210900039 </h1>
      <hr/>
      <NqmListTableName renderNqmListTableName={nqmListTableName} onNqmDelete={nqmHandleDelete} onNqmEdit={nqmHandleEdit}/>
      <hr/>
      <NqmFormTableName rederNqmTableName={nqmTableName} onNqmEdit={nqmHandleEdit}/>
    </div>
  );
}

import axios from '../nqm_apis/nqm-2210900039'
import React, { useEffect, useState } from 'react'

export default function NqmFormTableName({rederNqmTableName, onNqmEdit}) {

    const [nqmId,setNqmId] = useState(rederNqmTableName.nqmId)
    const [nqmTbName,setNqmTbName] = useState(rederNqmTableName.nqmTbName)
    const [nqmTbEmail,setNqmTbEmail] = useState(rederNqmTableName.nqmTbEmail)
    const [nqmTbPhone,setNqmTbPhone] = useState(rederNqmTableName.nqmTbPhone)
    const [nqmTbStatus,setNqmTbStatus] = useState(rederNqmTableName.nqmTbStatus)

    useEffect(()=>{
        setNqmId(rederNqmTableName,nqmId)
        setNqmTbName(rederNqmTableName,nqmTbName)
        setNqmTbEmail(rederNqmTableName,nqmTbEmail)
        setNqmTbPhone(rederNqmTableName,nqmTbPhone)
        setNqmTbStatus(rederNqmTableName,nqmTbStatus)
    },[])

    const nqmHandleSubmit = async (nqmEvent)=>{
        nqmEvent.preventDefault();
        const nqmObjTableName = {
            "nqmTbName": nqmTbName,
            "nqmTbEmail": nqmTbEmail,
            "nqmTbPhone": nqmTbPhone,
            "nqmTbStatus": nqmTbStatus,
            "nqmid": nqmId
        }
        console.log(nqmObjTableName);

        //them vao du lieu trong api
            await axios.put("nqmTableName/"+nqmObjTableName.nqmId,nqmObjTableName);
            onNqmEdit();
    }
  return (
    <div>
      <h2>Form xu lydu lieu them moi</h2>
      <form>
      <div className="input-group mb-3">
        <span className="input-group-text" id="nqmId">@</span>
        <input type="text" className="form-control" placeholder="nqmId" 
        name='nqmId'
        value={nqmId}
        onChange={(nqmEv)=>setNqmId(nqmEv.target.value)}
        aria-label="nqmId" 
        aria-describedby="nqmId"/>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="nqmTbName">@</span>
        <input type="text" className="form-control" placeholder="nqmTbName" 
        name='nqmTbName'
        value={nqmTbName}
        onChange={(nqmEv)=>setNqmTbName(nqmEv.target.value)}
        aria-label="nqmTbName" 
        aria-describedby="nqmTbName"/>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="nqmTbEmail">@</span>
        <input type="text" className="form-control" placeholder="nqmTbEmail" 
        name='nqmTbEmail'
        value={nqmTbEmail}
        onChange={(nqmEv)=>setNqmTbEmail(nqmEv.target.value)}
        aria-label="nqmTbEmail" 
        aria-describedby="nqmTbEmail"/>
        </div>  
        <div className="input-group mb-3">
        <span className="input-group-text" id="nqmTbPhone">@</span>
        <input type="text" className="form-control" placeholder="nqmTbPhone" 
        name='nqmTbPhone'
        value={nqmTbPhone}
        aria-label="nqmTbPhone" 
        onChange={(nqmEv)=>setNqmTbPhone(nqmEv.target.value)}
        aria-describedby="nqmTbPhone"/>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="nqmTbStatus">@</span>
            <select id='nqmTbStatus' className='form-control'
                 name='nqmTbStatus'
                 value={nqmTbStatus}
                 onChange={(nqmEv)=>setNqmTbStatus(nqmEv.target.value)}
                >
                <option value={true}>Active</option>
                <option value={false}>Non-Active</option>
            </select>
        </div>
        <button className='btn btn-primary my-3' name='btnNqmSave' onClick={nqmHandleSubmit}> Nqm : Save </button>
      </form>
    </div>
  )
}

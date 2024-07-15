import React from 'react'

export default function NqmListTableName({renderNqmListTableName, onNqmDelete,  onNqmEdit}) {
     console.log("List:",renderNqmListTableName);
     // hien thi du lieu
     const nqmElementTableName = renderNqmListTableName.map((nqmItem,nqmIndex)=>{
        return(
            <tr key={nqmIndex}>
                <td>{nqmItem.nqmId}</td>
                <td>{nqmItem.nqmTbName}</td>
                <td>{nqmItem.nqmTbEmail}</td>
                <td>{nqmItem.nqmTbPhone}</td>
                <td>{(nqmItem.nqmTbStatus===true || nqmItem.nqmTbStatus==="true")?"Active":"Non-Active"}</td>
                <td>
                    <button className='btn btn-success m-2'
                        onClick={()=>nqmHandelEdit(nqmItem)}
                    >nqm-edit</button>
                    <button className='btn btn-danger'
                        onClick={()=>nqmHanldeDelete(nqmItem.nqmId)}
                    >nqm-delete</button>

                </td>
            </tr>
        );
     })
     // su kien xoa
     const nqmHanldeDelete = (nqmId)=>{
            if(window.confirm('bạn có muốn xóa dữ liệu có nqmId'+ nqmId)){
                onNqmDelete(nqmId);
            }
           
     }
     //sua
     const nqmHandelEdit=(nqmObjTableName)=>{
        onNqmEdit(nqmObjTableName)
     }
  return (
    <div>
      <h2> Danh sach Thong Tin...</h2>
      <hr/>
      <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>nqmId</th>
                    <th>nqmTbName</th>
                    <th>nqmTbEmail</th>
                    <th>nqmTbPhone</th>
                    <th>nqmTbStatus</th>
                    <th>nqm: chức năng</th>
                </tr>
            </thead>
            <tbody>
                {nqmElementTableName}
            </tbody>
      </table>
    </div>
  )
}

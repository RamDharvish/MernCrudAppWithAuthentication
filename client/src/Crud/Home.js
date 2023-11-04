import React, { useEffect, useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Home() {
    const [tableData,setTableData]=useState([])
    const navigate=useNavigate()

    useEffect(()=> {
       axios.get("http://localhost:5000/get")
       .then(res =>setTableData(res.data) )
       .catch(err =>console.log(err))
    },[])

    const handleDelete=(id)=> {
     axios.delete("http://localhost:5000/delete/"+id)
     .then(res =>window.location.reload())
     .catch(err =>console.log(err))
    }
  return (
    <div className='d-flex bg-primary vh-100 justify-content-center align-items-center'>
        <div className="body p-3">
        <h3 className='btn btn-primary' onClick={()=>navigate('/add')}>ADD</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      tableData.map((data)=> (
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.number}</td>
                            <td className='btn btn-primary' onClick={()=>navigate(`/view/${data._id}`)}>View</td>
                            <td  className='btn btn-warning ms-3' onClick={()=>navigate(`/update/${data._id}`)}>Edit</td>
                            <td  className='btn btn-danger ms-3' onClick={()=>handleDelete(data._id)}>Delete</td>
                        </tr>
                      ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home
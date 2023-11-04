import React, { useState } from 'react'
import axios from'axios'
import { useNavigate } from 'react-router-dom'
function Add() {
    const [name,setName]=useState()
    const [age,setAge]=useState()
    const [number,setNumber]=useState()
    const navigate=useNavigate()

    const add=(e)=> {
        e.preventDefault()
        const formData={
            name:name,
            age:age,
            number:number
        }
       axios.post('http://localhost:5000/create',formData)
       .then(res =>{
        console.log("ok",res)
       navigate('/home')
       })
       .catch(err =>console.log(err))
    }
  return (
    <div className='d-flex bg-primary vh-100 justify-content-center align-items-center'> 
    <div className="body p-3">
        <h3>Add User</h3>
        <form onSubmit={add}>
            <div className="mt2">
                <label>Name</label>
                <input type="text" className='form-control' onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="mt2">
                <label>Age</label>
                <input type="number" className='form-control' onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <div className="mt2">
                <label>Number</label>
                <input type="number" className='form-control' onChange={(e)=>setNumber(e.target.value)}/>
            </div>
            <button type='submit' className='btn btn-primary mt-3'>Add User</button>
        </form>
    </div>
    </div>
  )
}

export default Add
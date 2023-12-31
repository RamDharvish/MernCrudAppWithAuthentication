import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
function Signup() {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/register', { name, email, password })
            .then(res => {
                navigate('/login');
            })
            .catch(err => console.log(err));
    };
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className="bg-white p-3 rounded w-2">
            <h1>Register</h1>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Name</strong>
                    </label>
                    <input 
                    type="text"
                    placeholder='enter name'
                    autoComplete='off'
                    name='name'
                    className='form-control rounded-0'
                    onChange={(e)=>setName(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input 
                    type="email"
                    placeholder='enter email'
                    autoComplete='off'
                    name='email'
                    className='form-control rounded-0'
                    onChange={(e)=>setEmail(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input 
                    type="password"
                    placeholder='enter password'
                    
                    name='password'
                    className='form-control rounded-0'
                    onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
            </form>
            <p >Already have an accout</p>
                <Link to={'/login'}  className='btn btn-default border w-100 rounded-0'>Login</Link>
        </div>
    </div>
  )
}

export default Signup
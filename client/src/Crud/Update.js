import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
function Update() {

    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [number, setNumber] = useState()
    const { id } = useParams()
    const navigate=useNavigate()

    useEffect(() => {
        axios.get("http://localhost:5000/view/" + id)
            .then(res => {
                setName(res.data.name)
                setAge(res.data.age)
                setNumber(res.data.number)
            })
            .catch(err => console.log(err))
    }, [])

    const formData={
            name:name,
            age:age,
            number:number
        }

    const update = (e) => {
        e.preventDefault()
        axios.put('http://localhost:5000/update/'+id,formData)
        .then(res =>{
            console.log("ok");
            navigate('/home')
        })
        .catch(err =>console.log(err))
    }
    return (
        <div className='d-flex bg-primary vh-100 justify-content-center align-items-center'>
            <div className="body p-3">
                <h3>Update User</h3>
                <form onSubmit={update}>
                    <div className="mt2">
                        <label>Name</label>
                        <input type="text" className='form-control' onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                    <div className="mt2">
                        <label>Age</label>
                        <input type="number" className='form-control' onChange={(e) => setAge(e.target.value)} value={age} />
                    </div>
                    <div className="mt2">
                        <label>Number</label>
                        <input type="number" className='form-control' onChange={(e) => setNumber(e.target.value)} value={number} />
                    </div>
                    <button type='submit' className='btn btn-primary mt-3'>Update User</button>
                </form>
            </div>
        </div>
    )
}

export default Update
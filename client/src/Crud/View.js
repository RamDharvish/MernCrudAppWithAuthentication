import React, { useEffect , useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
function View() {
  const {id}=useParams()
  const [result,setResult]=useState([])
  const navigate=useNavigate()
 useEffect(()=> {
  axios.get("http://localhost:5000/view/"+id)
  .then(res =>setResult(res.data))
  .catch(err =>console.log(err))
 },[])
  return (
    <div className='d-flex bg-primary vh-100 justify-content-center align-items-center'> 
    <div className="body p-3">
     <h1> Name : {result.name}</h1>
     <h2> Age : {result.age}</h2>
     <h3> Number ; {result.number}</h3>
     <button className='btn btn-warning' onClick={()=>navigate('/home') }>Home</button>
    </div>
    </div>
  )
}

export default View
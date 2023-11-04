import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Crud/Home'
import Add from './Crud/Add'
import View from './Crud/View'
import Update from './Crud/Update'
import Login from './Auth/Login'
import Signup from './Auth/Signup'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/update/:id' element={<Update/>}/>
          <Route path='/view/:id' element={<View/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
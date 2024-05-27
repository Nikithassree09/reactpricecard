import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import ViewBooked from './components/ViewBooked'
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/ViewBooked" element={<ViewBooked />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

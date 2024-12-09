import React from 'react'
import {useAuth} from '../context/authContext'
import AdminSidebar from '../components/dashboard/AdminSidebar.jsx'
import Navbar from '../components/Navbar.jsx'
import AdminSummary from '../components/AdminSummary.jsx'
import {Outlet} from 'react-router-dom'
function AdminDashboard() {
  const {user,loading}=useAuth();

  
  
  return (
    <div className='flex'>
    <AdminSidebar/>
    <div className='flex-1 ml-64 bg-gray-100 h-screen'>
    <Navbar/>
    <Outlet/>
    </div>
    </div>
  )
}

export default AdminDashboard
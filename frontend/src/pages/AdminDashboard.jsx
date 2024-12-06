import React from 'react'
import {useAuth} from '../context/authContext'
import AdminSidebar from '../components/dashboard/AdminSidebar.jsx'
function AdminDashboard() {
  const {user,loading}=useAuth();

  
  
  return (
    <AdminSidebar/>
  )
}

export default AdminDashboard
import React from 'react'
import {NavLink} from 'react-router-dom'
import {FaTachometerAlt,FaUsers,FaBuilding} from 'react-icons/fa'
const AdminSidebar=()=> {
  return (
    <div className='bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64'>
   <div className='bg-teal-900 h-12 flex items-center justify-center'>
   <h3 className='text-2xl text-center font-pacific'>Track Mart</h3>
   </div>
   <div>
   <NavLink to='/admin-dashboard'>
   <FaTachometerAlt/>
   <span>Dashboard</span>
   </NavLink>
   <NavLink to='/admin-dashboard'>
   <FaUsers/>
   <span>Employess</span>
   </NavLink>
   <NavLink to='/admin-dashboard'>
   <FaBuilding/>
   <span>Department</span>
   </NavLink>
   <NavLink to='/admin-dashboard'>
   <FaTachometerAlt/>
   <span>Leave</span>
   </NavLink>
   <NavLink to='/admin-dashboard'>
   <FaTachometerAlt/>
   <span>Salary</span>
   </NavLink>
   <NavLink to='/admin-dashboard'>
   <FaTachometerAlt/>
   <span>Settings</span>
   </NavLink>
   </div>
   </div>
  )
}

export default AdminSidebar